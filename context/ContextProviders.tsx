import { ReactNode, FC } from 'react'
import { MyProvider } from './EngageActionsContext'

interface CombinedProviderProps {
    children: ReactNode
}

const ContextProviders: FC<CombinedProviderProps> = ({ children }) => {
    return (
        <MyProvider>
            {/* <AnotherProvider> */}
            {children}
            {/* </AnotherProvider> */}
        </MyProvider>
    )
}

export default ContextProviders
