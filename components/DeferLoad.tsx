'use client'

import ScheduleEngine from './custom/ScheduleEngine'
import ChatWidget from './custom/Webchat'

const DeferLoad = ({ fonts, globalStyles, isLanding }: { fonts?: string; globalStyles?: { custom: string; global: string }; isLanding: boolean }) => {
    return (
        <>
            <style>
                {fonts} {globalStyles?.custom ? globalStyles.custom : ''} {isLanding && '.cta-icon{display:block}'}
            </style>
            {isLanding && <ChatWidget apiKey="mf2k0sam3vr14qfd2x3dk7po8ob0141b" />}
            {/* {isLanding && <ScheduleEngine apiKey="cl8d8jgjd00pv09pcdsyo89bc" />} */}
        </>
    )
}

export default DeferLoad
