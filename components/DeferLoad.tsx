'use client'

const DeferLoad = ({ fonts, globalStyles }: { fonts?: string; globalStyles?: { custom: string; global: string } }) => {
    return (
        <>
            <style>
                {fonts} {globalStyles?.custom ? globalStyles.custom : ''}
            </style>
        </>
    )
}

export default DeferLoad
