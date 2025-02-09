import { EVENT_TYPES, EventType } from './event-types.model'
import { EngagementAction } from './engagement-actions.model'

type BaseEvent = {
    timestamp: string
    eventType: EventType
    userId: string
    sessionId: string
}

export type VideoViewEvent = BaseEvent & {
    videoId: string
    creatorId: string
    watchTime: number
    watchPercentage: number
    feedPosition: number
}

export type EngagementEvent = BaseEvent & {
    videoId: string
    creatorId: string
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

export const isSessionStartEvent = (data: AnalyticsEvent): data is SessionStartEvent => {
    return data.eventType === EVENT_TYPES.sessionStart
}

export const isSessionEndEvent = (data: AnalyticsEvent): data is SessionEndEvent => {
    return data.eventType === EVENT_TYPES.sessionEnd
}

export const isVideoViewEvent = (data: AnalyticsEvent): data is VideoViewEvent => {
    return data.eventType === EVENT_TYPES.videoView
}

export const isEngagementEvent = (data: AnalyticsEvent): data is EngagementEvent => {
    return data.eventType === EVENT_TYPES.engagement
}
