'use client'
import { Action } from 'components/custom/Engage'
import { createContext, useState, useContext, ReactNode, FC } from 'react'

// Define the shape of the context value
interface MyContextType {
    engageLinks: Action[]
    setEngageLinks: React.Dispatch<React.SetStateAction<Action[]>>
}

// Create the context with a default value
const MyContext = createContext<MyContextType | undefined>(undefined)

// Create a provider component
interface MyProviderProps {
    children: ReactNode
}

export const MyProvider: FC<MyProviderProps> = ({ children }) => {
    const [engageLinks, setEngageLinks] = useState<Action[]>([])

    return <MyContext.Provider value={{ engageLinks, setEngageLinks }}>{children}</MyContext.Provider>
}

// Custom hook to use the context
export const useEngageContext = (): MyContextType => {
    const context = useContext(MyContext)
    if (!context) {
        throw new Error('useEngageContext must be used within a MyProvider')
    }
    return context
}
