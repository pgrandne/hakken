import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
	title: 'Hakken',
	description: 'Discover Web3',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={`bg-[#0c0c0e] ${inter.className}`}>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
