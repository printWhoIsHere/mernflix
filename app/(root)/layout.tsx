import { Header } from '@/components/layout/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex h-screen flex-col'>
			<Header />
			<main className='flex-1'>{children}</main>
		</div>
	)
}
