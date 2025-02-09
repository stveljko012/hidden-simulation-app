import Gallery from '../components/Gallery'
import '../styles/styles.css'
import { useEffect } from 'react'
import { useSession } from '@/contexts/session/session.context'
import { useRouter } from 'next/router'
import { useAnalytics } from '@/contexts/analytics/analytics.context'
import Menu from '@/components/Menu'

const Home = () => {
    const { user, sessionId, returnDay } = useSession()
    const router = useRouter()
    const analytics = useAnalytics()

    useEffect(() => {
        if (!user || !sessionId) {
            router.replace('/')
        } else {
            analytics.trackSessionStart({
                userId: user.userId,
                sessionId: sessionId,
                returnDay: returnDay,
                userLocation: user.location,
                userName: user.username,
            })
        }
    }, [])

    return (
        <div className="centered-container">
            <Menu />
            <Gallery />
        </div>
    )
}

export default Home
