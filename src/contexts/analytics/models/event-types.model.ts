export const EVENT_TYPES = {
    sessionStart: 'session_start',
    sessionEnd: 'session_end',
    videoView: 'video_view',
    engagement: 'engagement',
} as const

export type EventType = (typeof EVENT_TYPES)[keyof typeof EVENT_TYPES]
