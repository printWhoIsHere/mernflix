export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='h-full flex items-center justify-center bg-[url("/assets/images/bg.webp")] bg-cover bg-center'>
			{children}
		</div>
	)
}
