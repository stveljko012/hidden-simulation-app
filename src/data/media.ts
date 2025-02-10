export type Media = {
    id: string
    url: string
    mediaType: 'image' | 'video'
    creatorId: string
    creatorName: string
    category: string
    title: string
}

export const allMedia: Media[] = [
    {
        id: '3f0a3d12-4a5b-49e6-98c7-1d1e8a1c3e57',
        url: '/images/1.jpg',
        mediaType: 'image',
        creatorId: 'aa8f9b7c-3d6e-4a2b-9f1c-5e7d8a4c0b6f',
        creatorName: 'cyber_phoenix123',
        category: 'artistic',
        title: 'Premium Scene in Studio #42',
    },
    {
        id: '7b3a6f1c-8e9d-4b2f-9a5c-1d0e7a4c3b8f',
        url: '/images/2.jpg',
        mediaType: 'image',
        creatorId: 'bb2c5e4d-6a9f-8b3c-1d7e-0a4f9c8b6d3e',
        creatorName: 'neon_wolf456',
        category: 'cosplay',
        title: 'Epic Performance in Villa #87',
    },
    {
        id: '6c1f3a8b-9d7e-4b2a-5c0e-8f4d3b7a9c1e',
        url: '/images/3.jpg',
        mediaType: 'image',
        creatorId: 'cc9e4a7d-5b2c-8f3a-1d6e-0b4c7d3f9a8b',
        creatorName: 'frost_rider234',
        category: 'romantic',
        title: 'Hot Session in Resort #23',
    },
    {
        id: '2a9c5e7d-3b8f-4a6b-1d0e-9f4c7d3a5b8f',
        url: '/images/4.jpg',
        mediaType: 'image',
        creatorId: 'aa8f9b7c-3d6e-4a2b-9f1c-5e7d8a4c0b6f',
        creatorName: 'cyber_phoenix123',
        category: 'fetish',
        title: 'Exclusive Show in Hotel #55',
    },
    {
        id: '8f3a1d6e-4b2c-9d7e-5a0b-3c9f7a5d2b8f',
        url: '/images/5.jpg',
        mediaType: 'image',
        creatorId: 'bb2c5e4d-6a9f-8b3c-1d7e-0a4f9c8b6d3e',
        creatorName: 'neon_wolf456',
        category: 'amateur',
        title: 'Amazing Adventure in Beach #31',
    },
    {
        id: '5c9f7d3a-1b8f-4a6e-2d0b-7a3c8d9f5b2e',
        url: '/images/6.jpg',
        mediaType: 'image',
        creatorId: 'cc9e4a7d-5b2c-8f3a-1d6e-0b4c7d3f9a8b',
        creatorName: 'frost_rider234',
        category: 'professional',
        title: 'Perfect Experience in Pool #76',
    },
    {
        id: '1b8f7a5c-9d3e-4a2d-6e0b-7c3f9a5d8b2e',
        url: '/videos/v1.mp4',
        mediaType: 'video',
        creatorId: 'bb2c5e4d-6a9f-8b3c-1d7e-0a4f9c8b6d3e',
        creatorName: 'neon_wolf456',
        category: 'roleplay',
        title: 'Ultimate Act in Lounge #92',
    },
    {
        id: '9d7a5c3f-1b8e-4a2d-6e0b-3c5f9a7d8b2e',
        url: '/videos/v2.mp4',
        mediaType: 'video',
        creatorId: 'cc9e4a7d-5b2c-8f3a-1d6e-0b4c7d3f9a8b',
        creatorName: 'frost_rider234',
        category: 'pov',
        title: 'Special Moments in Villa #64',
    },
]

export const media = allMedia.sort(() => Math.random() - 0.5)
