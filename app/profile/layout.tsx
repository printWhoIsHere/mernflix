import { Header } from '@/components/layout/Header'
import Sidebar from './_components/sidebar'

export default function ProfileLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex h-screen flex-col'>
			<Header />
			<div className='h-full flex'>
				<Sidebar />
				<main className='w-full h-full flex-center flex-1'>{children}</main>
			</div>
		</div>
	)
}
