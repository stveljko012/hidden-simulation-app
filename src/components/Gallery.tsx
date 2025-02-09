import { useState, useEffect } from 'react'
import '../styles/styles.css'
import { media, Media } from '../data/media'
import { useAnalytics } from '@/contexts/analytics/analytics.context'
import { useSession } from '@/contexts/session/session.context'

const Gallery = () => {
    const analytics = useAnalytics()
    const { user, sessionId, addWatchedVideo } = useSession()

    const [show, setShow] = useState(false)

    const [feedPosition, setFeedPosition] = useState(1)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentMedia, setCurrentMedia] = useState<Media | null>(null)

    useEffect(() => {
        setCurrentMedia(media[currentIndex])
        setShow(true)
    }, [])

    const updateMedia = () => {
        const next = media[currentIndex]

        if (next) {
            if (sessionId && user && currentMedia) {
                analytics.trackVideoView({
                    watchPercentage: 0.68,
                    watchTime: 3,
                    sessionId,
                    feedPosition,
                    userId: user.userId,
                    creatorId: currentMedia.creatorId,
                    creatorName: currentMedia.creatorName,
                    userName: user.username,
                    userLocation: user.location,
                    videoCategory: currentMedia.category,
                    videoId: currentMedia.id,
                    videoTitle: currentMedia.title,
                })
            }

            setCurrentMedia(next)
            setFeedPosition((prev) => prev + 1)

            addWatchedVideo()
        }
    }

    const handlePrevious = async () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : media.length - 1))
        updateMedia()
    }

    const handleNext = async () => {
        setCurrentIndex((prevIndex) => (prevIndex < media.length - 1 ? prevIndex + 1 : 0))
        updateMedia()
    }

    const isVideo = (media: Media | null) => {
        return media?.mediaType === 'video' || false
    }

    if (!show) {
        return <>Loading...</>
    }

    return (
        <div className="flex flex-col items-center">
            {media.length > 0 &&
                (isVideo(currentMedia) ? (
                    <video src={currentMedia?.url} controls autoPlay className="fixed-image-size" />
                ) : (
                    <img src={currentMedia?.url} alt={`Media ${currentIndex + 1}`} className="fixed-image-size" />
                ))}
            <div className="flex space-x-4 mt-4">
                <button onClick={handlePrevious} className="px-4 py-2 bg-gray-200">
                    Previous
                </button>
                <button onClick={handleNext} className="px-4 py-2 bg-gray-200">
                    Next
                </button>
            </div>
        </div>
    )
}

export default Gallery
