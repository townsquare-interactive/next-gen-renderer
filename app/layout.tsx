import './global.css'
import { Ubuntu } from '@next/font/google'

const ubuntu = Ubuntu({
    variable: '--ubuntu-font',
    subsets: ['latin'],
    weight: '700',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head></head>
            {/* <body className={ubuntu.variable}>{children}</body> */}
            <body>{children}</body>
        </html>
    )
}
