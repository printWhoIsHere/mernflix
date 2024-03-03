import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { SITE_NAME } from '@/constants/seo.constants'
import { ThemeProvider } from '@/components/theme-provider'

import '@/styles/globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-poppins',
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Temp description',
	icons: {
		icon: '/assets/icons/logo.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<ThemeProvider attribute='class' defaultTheme='dark'>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
