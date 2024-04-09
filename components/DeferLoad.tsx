'use client'

const DeferLoad = ({ fonts, globalStyles, isLanding }: { fonts?: string; globalStyles?: { custom: string; global: string }; isLanding: boolean }) => {
    return (
        <>
            <style>
                {fonts} {globalStyles?.custom ? globalStyles.custom : ''} {isLanding && '.cta-icon{display:block}'}
            </style>
        </>
    )
}

export default DeferLoad
