import { EventType } from './event-types.model'
import { EngagementAction } from './engagement-actions.model'

export type BaseEvent = {
    timestamp: string
    eventType: EventType
    userId: string
    userName: string
    sessionId: string
    userLocation: string
}

export type VideoViewEvent = BaseEvent & {
    videoId: string
    creatorId: string
    creatorName: string
    watchTime: number
    watchPercentage: number
    feedPosition: number
    videoTitle: string
    videoCategory: string
}

export type EngagementEvent = BaseEvent & {
    videoId: string
    videoTitle: string
    videoCategory: string
    creatorId: string
    creatorName: string
    action: EngagementAction
}

export type SessionStartEvent = BaseEvent & {
    returnDay: number
}

export type SessionEndEvent = BaseEvent & {
    sessionDuration: number
    videosWatched: number
}

export type AnalyticsEvent = VideoViewEvent | EngagementEvent | SessionEndEvent | SessionStartEvent
