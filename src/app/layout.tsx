import { BaseLayout } from '@/layouts/Base'
import '@styles/globals.scss'
import type { Metadata } from 'next'
import { Jersey_20 } from 'next/font/google'
import { ReactNode } from 'react'

const jersey20 = Jersey_20({
    variable: '--font-jersey-20',
    subsets: ['latin'],
    weight: '400',
    fallback: ['Inter', 'system-ui'],
})

export const metadata: Metadata = {
    title: 'Elden Ring - Runes Calculator',
    description:
        'Easily calculate how many runes you will need to reach your next level!',
    authors: {
        name: 'Gabriel Gois Andrade',
        url: 'https://github.com/gabrielgoisandrade',
    },
	other: { "google-adsense-account": ['ca-pub-5941870109622806'] }
}

type RootLayoutProps = {
    children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html className={jersey20.variable} lang='en'>
            <body>
                <BaseLayout>{children}</BaseLayout>
            </body>
        </html>
    )
}
