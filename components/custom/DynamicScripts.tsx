/* import { useEffect } from 'react';

const DynamicScripts = ({ code }: { code: string }) => {
    useEffect(() => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(code, 'text/html');
        const scriptTags = doc.getElementsByTagName('script');

        // Load each script dynamically
        Array.from(scriptTags).forEach(script => {
            const scriptElement = document.createElement('script');
            scriptElement.src = script.src;
            scriptElement.async = true;
            scriptElement.crossOrigin = 'anonymous';
            document.body.appendChild(scriptElement);
        });

        // Wait for jQuery to be loaded before executing inline scripts
        function executeInlineScripts() {
            const inlineScripts = doc.querySelectorAll('script:not([src])');
            inlineScripts.forEach(script => {
                const scriptContent = script.innerHTML.trim();
                const scriptIdentifier = `script-${Buffer.from(scriptContent, 'base64').toString('base64')}`; // Unique identifier for the script
                // Check if script has been executed before
                if (!document.querySelector(`script[data-script="${scriptIdentifier}"]`)) {
                    eval(scriptContent); // Execute inline script
                    const scriptTag = document.createElement('script');
                    scriptTag.setAttribute('data-script', scriptIdentifier);
                    document.body.appendChild(scriptTag);
                }
            });
        }

        // Execute inline scripts
            // If jQuery is not available, wait for it to be loaded
            const scriptElement = document.createElement('script');
            scriptElement.src = 'https://code.jquery.com/jquery-3.6.0.min.js'; // Update the jQuery URL if needed
            scriptElement.onload = executeInlineScripts;
            document.body.appendChild(scriptElement);
        //}

    

        // Clean up dynamically loaded scripts
        return () => {
            Array.from(scriptTags).forEach(script => {
                const scriptElement = document.querySelector(`script[src="${script.src}"]`);
                if (scriptElement) {
                    document.body.removeChild(scriptElement);
                }
            });
        };
    }, []);

    return null;
};

export default DynamicScripts;
 */
import { useEffect } from "react";

const DynamicScripts = ({ code }: { code: string }) => {
  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(code, "text/html");
    const scriptTags = doc.querySelectorAll("script");
    const linkTags = doc.querySelectorAll('link[rel="stylesheet"]');

    // Function to execute inline scripts
    function executeInlineScripts() {
      const inlineScripts = doc.querySelectorAll("script:not([src])");
      inlineScripts.forEach((script) => {
        const scriptContent = script.innerHTML.trim();
        eval(scriptContent); // Execute inline script
      });
    }

    // Check if jQuery is available
    /* if (window.jQuery) {
      executeInlineScripts(); // Execute inline scripts if jQuery is already loaded
    } else {
      // If jQuery is not available, wait for it to be loaded
      const scriptElement = document.createElement("script");
      scriptElement.src = "https://code.jquery.com/jquery-3.6.0.min.js"; // Update the jQuery URL if needed
      scriptElement.onload = executeInlineScripts;
      document.body.appendChild(scriptElement);
    }
 */
    // Load each external script dynamically
    scriptTags.forEach(async (script) => {
       if (script.src) {
        console.log("script url", `/api/proxy?url=${script.src}`);
        try {
          const response = await fetch("/api/proxy", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: script.src }), // Ensure script.src is the correct URL
          });

          if (!response.ok) {
            throw new Error("Failed to fetch script");
          }

          const scriptContent = await response.text();
          const scriptElement = document.createElement("script");
          scriptElement.textContent = scriptContent;
          document.body.appendChild(scriptElement);
        } catch (error) {
          console.error("Error fetching script:", error);
        }
      } 
    });

    // Load each stylesheet dynamically
    /* linkTags.forEach((link) => {
      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href = link.href;
      document.head.appendChild(linkElement);
    });
 */
    // Clean up dynamically loaded stylesheets
    return () => {
        
      /* linkTags.forEach((link) => {
        const linkElement = document.querySelector(
          `link[rel="stylesheet"][href="${link.href}"]`
        );
        if (linkElement) {
          document.head.removeChild(linkElement);
        }
      }); */
      <></>
      
    };
  }, [code]);

  return null;
};

/* const DynamicScripts = ({code}:any) => {
  useEffect(() => {


    // Extract JavaScript code from the string
    const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    let match;
    
            const scriptElement = document.createElement('script');
            scriptElement.src = 'https://code.jquery.com/jquery-3.6.0.min.js'; // Update the jQuery URL if needed
            scriptElement.onload = ()=> {
                while ((match = scriptRegex.exec(code)) !== null) {
                    const scriptCode = match[1];
                    // Execute each script code
                    eval(scriptCode);
                  }
            };
            document.body.appendChild(scriptElement);

    
    }, []);

  return (
    <div>
    </div>
  );
}; */

/* const DynamicScripts = ({ code }: any) => {
  useEffect(() => {
    // Extract script tags with src attribute
    const scriptSrcRegex = /<script\s+src="([^"]+)"\s*><\/script>/g;
    let match;
    const scriptSrcUrls: string[] = [];

    const scriptElement = document.createElement('script');
            scriptElement.src = 'https://code.jquery.com/jquery-3.6.0.min.js'; // Update the jQuery URL if needed
            scriptElement.onload = ()=> {
            while ((match = scriptSrcRegex.exec(code)) !== null) {
            const srcUrl = match[1];
            scriptSrcUrls.push(srcUrl);
            }

    // Load scripts with src attributes
            scriptSrcUrls.forEach((srcUrl) => {
            const scriptElement = document.createElement('script');
            scriptElement.src = srcUrl;
            
            });

    // Load jQuery (assuming it's needed)

    // Extract and execute scripts without src attribute
        const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
        while ((match = scriptRegex.exec(code)) !== null) {
        const scriptCode = match[1];
        // Execute each script code
        eval(scriptCode);
        }
}
document.body.appendChild(scriptElement);
  }, [code]);

  return (
    <div>
    </div>
  );
}; */

export default DynamicScripts;
