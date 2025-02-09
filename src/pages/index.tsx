import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from '@/contexts/session/session.context'
import { useAnalytics } from '@/contexts/analytics/analytics.context'
import { LAST_VISIT_STORAGE_KEY } from '@/contexts/session/constants/storage-keys.constant'

const Home = () => {
    const { login, user, sessionId, getReturnDay } = useSession()
    const analytics = useAnalytics()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleLogin = async () => {
        setError('')

        try {
            if (username && password) {
                login(username, password)
                router.push('/home')
            } else {
                setError('Enter username and password.')
            }
        } catch (e) {
            setError('Invalid username and password combination.')
        }
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>

            <h5 style={{ color: 'red' }}>{error}</h5>
        </div>
    )
}

export default Home
