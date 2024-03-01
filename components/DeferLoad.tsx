'use client'

const DeferLoad = ({ fonts, globalStyles }: { fonts?: string; globalStyles?: any }) => {

    return (
        <>
             <style>
                {fonts} {(typeof globalStyles != 'string' && globalStyles?.custom) ? globalStyles?.custom : globalStyles || ''}
             </style>
             
        </>
    )
}

export default DeferLoad
