import { createContext, useContext, useState, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { allUsers, SessionUser } from '@/data/users'

interface SessionContextType {
    user: SessionUser | null
    sessionId: string | null
    resetSession: () => void
    login: (username: string, password: string) => void
}

const SessionContext = createContext<SessionContextType | undefined>(undefined)

export function SessionProvider({ children }: { children: ReactNode }) {
    const [sessionUser, setSessionUser] = useState<SessionUser | null>(null)
    const [sessionId, setSessionId] = useState<string | null>(null)

    const resetSession = () => setSessionId(uuidv4())

    const login = (username: string, password: string): void => {
        const user = allUsers.find((u) => u.username === username && u.password === password)

        if (user) {
            setSessionUser(user)
            resetSession()
        } else {
            throw new Error('Not Authenticated')
        }
    }

    const value = {
        user: sessionUser,
        sessionId,
        resetSession,
        login,
    }

    return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

export function useSession() {
    const context = useContext(SessionContext)

    if (!context) {
        throw new Error('useSession must be used within SessionProvider')
    }

    return context
}
