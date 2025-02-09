import axios from 'axios'
import {
    AnalyticsEvent,
    EngagementEvent,
    SessionEndEvent,
    SessionStartEvent,
    VideoViewEvent,
} from '@/contexts/analytics/models/event.model'
import { createContext, ReactNode, useContext } from 'react'
import { EVENT_TYPES } from '@/contexts/analytics/models/event-types.model'

type TrackEventParams<T> = Omit<T, 'timestamp' | 'eventType'>

type AnalyticsContextType = {
    trackVideoView: (data: TrackEventParams<VideoViewEvent>) => Promise<void>
    trackEngagement: (data: TrackEventParams<EngagementEvent>) => Promise<void>
    trackSessionStart: (data: TrackEventParams<SessionStartEvent>) => Promise<void>
    trackSessionEnd: (data: TrackEventParams<SessionEndEvent>) => Promise<void>
}

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

const analyticsApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT,
})

export function AnalyticsProvider({ children }: { children: ReactNode }) {
    const trackEvent = async (event: AnalyticsEvent) => {
        try {
            await analyticsApi.post('/', event)
        } catch (error) {
            console.error('Analytics error:', error)
        }
    }

    const value = {
        trackVideoView: (data: TrackEventParams<VideoViewEvent>) =>
            trackEvent({
                ...data,
                timestamp: new Date().toISOString(),
                eventType: EVENT_TYPES.videoView,
            }),
        trackEngagement: (data: TrackEventParams<EngagementEvent>) =>
            trackEvent({
                ...data,
                timestamp: new Date().toISOString(),
                eventType: EVENT_TYPES.engagement,
            }),
        trackSessionStart: (data: TrackEventParams<SessionStartEvent>) =>
            trackEvent({
                ...data,
                timestamp: new Date().toISOString(),
                eventType: EVENT_TYPES.sessionStart,
            }),
        trackSessionEnd: (data: TrackEventParams<SessionEndEvent>) =>
            trackEvent({
                ...data,
                timestamp: new Date().toISOString(),
                eventType: EVENT_TYPES.sessionEnd,
            }),
    }

    return <AnalyticsContext.Provider value={value}>{children}</AnalyticsContext.Provider>
}

export function useAnalytics() {
    const context = useContext(AnalyticsContext)

    if (!context) {
        throw new Error('useAnalytics must be used within AnalyticsProvider')
    }

    return context
}
