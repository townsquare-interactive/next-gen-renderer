import { useEffect, useState } from 'react'
import { ThemeStyles } from 'types'
declare var WebChat: any

const ChatWidget = ({ apiKey, themeStyles }: { apiKey: string; themeStyles: ThemeStyles }) => {
    const [webChatLoaded, setWebChatLoaded] = useState(false)

    useEffect(() => {
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
    }, [])

    useEffect(() => {
        if (webChatLoaded) {
            openChat()
        }
    }, [webChatLoaded])

    const openChat = () => {
        if (typeof WebChat !== 'undefined') {
            WebChat.loadChat({
                apiKey: apiKey,
                initialMessage: 'Thank you for choosing Guaranteed Service. How can I help you today?',
                initialResponses: [],
                logoUrl: 'https://guaranteedservice.com/files/2023/03/guaranteedservice.png',
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
