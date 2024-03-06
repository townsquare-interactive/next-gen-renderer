import Script from 'next/script'

const NoSrcScripts = ({ noSrcScripts }: any) => {
    return (
        <>
            {noSrcScripts.map((script: any, idx: number) => (
                <Script key={idx} id={`${script.id}`} async={true} defer={true} strategy="lazyOnload">
                    {script.script}
                </Script>
            ))}
        </>
    )
}

export default NoSrcScripts
