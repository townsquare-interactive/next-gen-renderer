import '../styles/globals.scss'

import type { AppProps } from 'next/app'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
const { library } = require('@fortawesome/fontawesome-svg-core')

library.add(fas, fab, far)

/* import { Ubuntu, Anton, Averia_Libre, Arvo, Lato } from '@next/font/google'
const lato = Lato({ weight: ['400', '700', '900'] })
const anton = Anton({ weight: ['400'] })
const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'] }) */

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
