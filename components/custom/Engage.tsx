'use client'
import { useEngageContext } from '../../context/EngageActionsContext'
import { useLayoutEffect, useState } from 'react'
import { ThemeStyles } from 'types'

declare var LiveSite: any

export interface Action {
    name: string
    text: string
    icon?: string
    url?: string
    option?: string
    action?: string
    href?: string
}

interface ThemeColors {
    color: string
    bgColor: string
    buttonTextColor: string
    buttonBgColor: string
    labelTextColor: string
    labelBgColor: string
}

export interface VcitaData {
    businessId: string
    actions?: Action[]
    themeColors?: ThemeColors
    titleText?: string
    mainAction?: string
    bodyText?: string
    widgetLabel?: string
    showMyAccountBtn?: boolean
    themeStyles?: ThemeStyles
    engageLinks?: Action[]
}

///Users/joshedwards/Documents/docker/repos/wordpress/current/cms_websites/classes/scripts/vcita.php
const Engage = ({ businessId, actions, themeColors, titleText, mainAction, bodyText, widgetLabel, showMyAccountBtn, themeStyles }: VcitaData) => {
    const [themeColor, setThemeColor] = useState<string>('')
    const { engageLinks, setEngageLinks } = useEngageContext()

    useLayoutEffect(() => {
        const initEngage = () => {
            const customWindow = window as any
            customWindow.liveSiteAsyncInit = function () {
                LiveSite.init({
                    id: businessId,
                    engageButtonText: widgetLabel ? widgetLabel : 'Schedule Now',
                    activeEngage: true,
                    engageButton: true,
                    inlineActions: true,
                    myAccountAction: showMyAccountBtn || false,
                    activeEngageText: bodyText ? bodyText : "Thanks for stopping by! We're here to help, please don't hesitate to reach out.",
                    activeEngageTitle: titleText ? titleText : "Let's Talk",
                    collapsedActions: false,
                    actionButtons: true, //side buttons
                })
                LiveSite.init({
                    id: businessId,
                })

                //add actions before render (you can find examples of actions in chrome scripts window under vcita)
                if (actions) {
                    LiveSite.on('beforeRender', function () {
                        const newActions: Action[] = []
                        //loop through the current actions from script to match to props we want to use
                        actions.forEach((currentItem: Action) => {
                            const matchingItem = LiveSite.config.actions.find((firstItem: Action) => firstItem.name === currentItem.name)

                            // If a matching item is found, update its url and icon
                            if (matchingItem) {
                                newActions.push(matchingItem)
                            }
                        })

                        LiveSite.config.actions = newActions
                        setEngageLinks(actions)
                    })
                }
            }
            ;(function (d: Document, s: string, id: string) {
                var js,
                    fjs = d.getElementsByTagName(s)[0],
                    p = 'https://',
                    r = Math.floor(new Date().getTime() / 1000000)
                if (d.getElementById(id)) {
                    return
                }
                js = d.createElement(s)
                js.id = id // @ts-ignore
                js.src = p + 'd2ra6nuwn69ktl.cloudfront.net/assets/livesite.js?' + r
                if (fjs && fjs.parentNode) {
                    fjs.parentNode.insertBefore(js, fjs)
                } else {
                    d.head.appendChild(js) // Fallback if no <script> tags are found
                }
            })(document, 'script', 'livesite-jssdk')
        }

        initEngage()

        if (themeColors) {
            setThemeColor(`
       #livesite_active_engage .ls-ae-text-T { color: ${themeColors.color}; }
       #livesite_active_engage .ls-ae-bg-T { background-color: ${themeColors.bgColor}; }
       #livesite_active_engage .ls-main-action-T { color: ${themeColors.buttonTextColor}; }
       #livesite_active_engage .ls-main-action-T {  background-color: ${themeColors.buttonBgColor}; }
       #livesite_active_engage .ls-main-action-T:hover {  background-color: ${themeColors.buttonBgColor}; }
       #livesite_engage_button a.ls-engage-button { background-color: ${themeColors.labelBgColor}; color: ${themeColors.labelTextColor}; }
       #livesite_engage_button a.ls-engage-button:hover { background-color: ${themeColors.labelBgColor}; color: ${themeColors.labelTextColor}; }
        `)
        } else {
            setThemeColor(
                `#livesite_active_engage .ls-main-action-T, #livesite_engage_button a.ls-engage-button, #livesite_engage_button .ls-action-T, #livesite_action_buttons .ls-action-T {  background-color: var(--promo); }
                #livesite_engage_button a.ls-engage-button:hover, #livesite_active_engage .ls-main-action-T:hover, #livesite_action_buttons .ls-action-T:hover {background-color: var(--promo2)}`
            )
        }
        themeStyles

        return () => {}
    }, [])

    return <style>{themeColor ? themeColor : ''}</style>
}

export default Engage
