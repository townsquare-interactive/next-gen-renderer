import data from '../components/moduleData'
import { GetStaticProps } from 'next'
import { FooterProps, ModuleData, LayoutProps } from '../components/types'
import Footer from '../components/Footer'
import useSWR, { Key, Fetcher } from 'swr'

export default function Layout({ moduleData }: any, { children }: React.PropsWithChildren<{}>) {
    return (
        <div>
            {children}
            {/* <Footer {...(moduleData.FooterData as FooterProps)} /> */}
        </div>
    )
}
