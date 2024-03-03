export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex h-screen flex-col'>
			<main className='flex-1'>{children}</main>
		</div>
	)
}
