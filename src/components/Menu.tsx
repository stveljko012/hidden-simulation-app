import { useRouter } from 'next/router'
import '../styles/styles.css'
import { useSession } from '@/contexts/session/session.context'
import { useAnalytics } from '@/contexts/analytics/analytics.context'

const Menu = () => {
    const router = useRouter()
    const { logout, sessionId, user, videosWatched, getSessionDuration } = useSession()
    const analytics = useAnalytics()

    const handleLogout = () => {
        if (sessionId && user) {
            analytics.trackSessionEnd({
                sessionId,
                userId: user.userId,
                sessionDuration: getSessionDuration(),
                userLocation: user.location,
                userName: user.username,
                videosWatched,
            })
        }

        logout()
        router.replace('/')
    }

    return (
        <div className="menu">
            <button className={`menu-button`} onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default Menu
