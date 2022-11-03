import './global.css'
import { Inter } from '@next/font/google'
import { Ubuntu } from '@next/font/google'

/* const ubuntu = Ubuntu({
    weight: '400',
    variable: '--oxygen-font',
})
 */

const ubuntu = Ubuntu({
    variable: '--ubuntu-font',
    subsets: ['latin'],
    weight: '700',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            {/*  <head></head> */}
            <body className={ubuntu.variable}>{children}</body>
        </html>
    )
}
