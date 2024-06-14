import { useEffect, useState } from 'react'
import { ThemeStyles } from 'types'
declare var WebChat: any

const ChatWidget = ({ apiKey, themeStyles, logo = '', siteName }: { apiKey: string; themeStyles: ThemeStyles; logo?: string; siteName?: string }) => {
    const [webChatLoaded, setWebChatLoaded] = useState(false)

    useEffect(() => {
        if (apiKey) {
            const scriptChat = document.createElement('script')
            scriptChat.src = 'https://webchat.scheduleengine.net/webchat-v1.js'
            scriptChat.async = true
            document.body.appendChild(scriptChat)

            scriptChat.onload = () => {
                setWebChatLoaded(true)
            }

            return () => {
                // Cleanup function to remove the script from the DOM
                document.body.removeChild(scriptChat)
            }
        }
    }, [])

    useEffect(() => {
        if (webChatLoaded && apiKey) {
            openChat()
        }
    }, [webChatLoaded])

    const openChat = () => {
        if (typeof WebChat !== 'undefined') {
            WebChat.loadChat({
                apiKey: apiKey,
                initialMessage: `Thank you for choosing ${siteName}. How can I help you today?`,
                initialResponses: [],
                logoUrl: logo || '',
                title: 'Welcome',
                primaryAccentColor: themeStyles.promoColor,
                primaryAccentTextColor: '#FFFFFF',
                backgroundColor: '#FFFFFF',
                agentBubbleBackgroundColor: themeStyles.promoColor,
                agentBubbleTextColor: '#FFFFFF',
                bubbleBackgroundColor: '#F1F1F1',
                bubbleTextColor: '#000000',
                sendButtonBackgroundColor: themeStyles.promoColor,
                sendButtonTextColor: '#FFFFFF',
                suggestedResponseColor: themeStyles.promoColor,
                autoOpen: false,
                autoOpenMobile: false,
                position: 'right',
                buttonBackgroundColor: themeStyles.promoColor,
                buttonText: 'Chat with Us',
                buttonTextColor: '#FFFFFF',
                autoOpenDelay: 3,
            })
        }
    }

    return <></>
}

export default ChatWidget
