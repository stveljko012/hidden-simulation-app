export type SessionUser = {
    username: string
    password: string
    userId: string
    location: string
}

export const allUsers = [
    { username: 'test', password: 'test', userId: '8f7e6d5c-4b3a-4a3b-8c7d-6e5f4d3c2b1a', location: 'Berlin' },
    {
        username: 'bob_jones',
        password: 'Test456!',
        userId: '7e6f5d4c-3b2a-1c0d-9e8f-7a6b5c4d3e2f',
        location: 'Atlanta',
    },
    {
        username: 'carol_white',
        password: 'Test789!',
        userId: '6d5e4c3b-2a1b-0c9d-8e7f-6a5b4c3d2e1f',
        location: 'Dubai',
    },
    {
        username: 'david_brown',
        password: 'Test012!',
        userId: '5c4b3a2d-1e0f-9d8c-7b6a-5c4d3e2f1a0b',
        location: 'Tokyo',
    },
    {
        username: 'emma_davis',
        password: 'Test345!',
        userId: '4b3a2c1d-0e9f-8d7c-6b5a-4c3d2e1f0a9b',
        location: 'Houston',
    },
]
