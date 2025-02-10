import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { AnalyticsProvider } from '@/contexts/analytics/analytics.context'
import { SessionProvider } from '@/contexts/session/session.context'
import { init } from '@fullstory/browser'

function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        init({ orgId: 'o-22NEFT-na1' })
    }, [])

    return (
        <SessionProvider>
            <AnalyticsProvider>
                <Component {...pageProps} />
            </AnalyticsProvider>
        </SessionProvider>
    )
}

export default App
