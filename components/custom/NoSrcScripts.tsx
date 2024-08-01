import Script from 'next/script'

const NoSrcScripts = ({ noSrcScripts, strategy }: any) => {
    console.log(strategy, noSrcScripts)
    return (
        <>
            {noSrcScripts.map((script: any, idx: number) => (
                <Script key={strategy + idx} id={`${script.id}`} async={true} defer={true} strategy={strategy}>
                    {script.script}
                </Script>
            ))}
        </>
    )
}

export default NoSrcScripts
