export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='h-full flex items-center justify-center bg-[url("/assets/images/bg.webp")] bg-cover bg-center'>
			<div className='absolute top-0 left-0 h-full w-full bg-black/80' />
			<div className='z-[1]'>{children}</div>
		</div>
	)
}
