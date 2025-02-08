import { useRouter } from 'next/router'
import '../styles/styles.css' // Import the CSS file

const Menu = () => {
    const router = useRouter()
    const currentPath = router.pathname

    return (
        <div className="menu">
            <button
                className={`menu-button ${currentPath === '/following' ? 'active' : ''}`}
                onClick={() => router.push('/following')}
            >
                Following
            </button>
            <button
                className={`menu-button ${currentPath === '/discover' ? 'active' : ''}`}
                onClick={() => router.push('/discover')}
            >
                Discover
            </button>
        </div>
    )
}

export default Menu
