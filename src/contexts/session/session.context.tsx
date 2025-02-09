import { createContext, useContext, useState, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { allUsers, SessionUser } from '@/data/users'
import { LAST_VISIT_STORAGE_KEY } from '@/contexts/session/constants/storage-keys.constant'

interface SessionContextType {
    user: SessionUser | null
    sessionId: string | null
    addWatchedVideo: () => void
    returnDay: number
    videosWatched: number

    resetSession: () => void
    login: (username: string, password: string) => void
    logout: () => void
    getSessionDuration: () => number
}

const SessionContext = createContext<SessionContextType | undefined>(undefined)

export function SessionProvider({ children }: { children: ReactNode }) {
    const [sessionUser, setSessionUser] = useState<SessionUser | null>(null)
    const [sessionId, setSessionId] = useState<string | null>(null)
    const [returnDay, setReturnDay] = useState(1)
    const [sessionStart, setSessionStart] = useState<Date | null>(null)
    const [videosWatched, setVideosWatched] = useState(0)

    const resetSession = () => {
        localStorage.setItem(LAST_VISIT_STORAGE_KEY, new Date().toISOString())
        setVideosWatched(0)

        setSessionId(uuidv4())
    }

    const getReturnDay = (): number => {
        try {
            const lastVisit = localStorage.getItem(LAST_VISIT_STORAGE_KEY)

            if (lastVisit) {
                const diff = Math.floor((new Date().getTime() - new Date(lastVisit).getTime()) / (1000 * 60 * 60 * 24))
                return diff > 0 ? diff : 1
            }

            return 1
        } catch (e) {
            return 1
        }
    }

    const login = (username: string, password: string): void => {
        const user = allUsers.find((u) => u.username === username && u.password === password)

        if (user) {
            setReturnDay(getReturnDay())
            setSessionUser(user)
            setSessionStart(new Date())

            resetSession()
        } else {
            throw new Error('Not Authenticated')
        }
    }

    const logout = (): void => {
        setReturnDay(1)
        setSessionUser(null)
        setSessionId(null)
        localStorage.setItem(LAST_VISIT_STORAGE_KEY, new Date().toISOString())
    }

    const addWatchedVideo = () => {
        setVideosWatched((prev) => prev + 1)
    }

    const getSessionDuration = (): number => {
        if (sessionStart) {
            return Math.floor((new Date().getTime() - sessionStart.getTime()) / 1000)
        }

        return 0
    }

    const value = {
        user: sessionUser,
        sessionId,
        resetSession,
        login,
        logout,
        returnDay,
        addWatchedVideo,
        videosWatched,
        getSessionDuration,
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
