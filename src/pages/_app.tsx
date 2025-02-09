import React from 'react'
import type { AppProps } from 'next/app'
import { AnalyticsProvider } from '@/contexts/analytics/analytics.context'
import { SessionProvider } from '@/contexts/session/session.context'

function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider>
            <AnalyticsProvider>
                <Component {...pageProps} />
            </AnalyticsProvider>
        </SessionProvider>
    )
}

export default App
