export const ENGAGEMENT_ACTIONS = {
    like: 'like',
    share: 'share',
    comment: 'comment',
} as const

export type EngagementAction = (typeof ENGAGEMENT_ACTIONS)[keyof typeof ENGAGEMENT_ACTIONS]
