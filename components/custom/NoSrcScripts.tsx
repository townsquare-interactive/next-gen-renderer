import Script from 'next/script'
import { NoSrcObject } from './ReturnNextScript'

const NoSrcScripts = ({
    noSrcScripts,
    strategy,
}: {
    noSrcScripts: NoSrcObject[]
    strategy: 'afterInteractive' | 'lazyOnload' | 'beforeInteractive' | 'worker'
}) => {
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
