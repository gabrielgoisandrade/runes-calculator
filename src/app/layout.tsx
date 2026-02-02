import '@styles/globals.scss'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ReactNode } from 'react'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Runes Calculator',
    description:
        'Easily calculate how many runes/souls you will need to reach your next level!',
    authors: {
        name: 'Gabriel Gois Andrade',
        url: 'https://github.com/gabrielgoisandrade',
    },
}

type RootLayoutProps = {
    children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html
            className={`${geistSans.variable} ${geistMono.variable}`}
            lang='en'
        >
            <body>{children}</body>
        </html>
    )
}
