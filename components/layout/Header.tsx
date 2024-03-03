'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { NavItems } from '@/components/layout/NavItems'
import { MobileNav } from '@/components/layout/MobileNav'
import { ProfileMenu } from '@/components/layout/ProfileMenu'

const isLogged = true

export const Header = () => {
	const router = useRouter()

	const handleClick = () => {
		router.push('/auth/login')
	}

	return (
		<header className='w-full border-b shadow-md'>
			<div className='wrapper flex-between'>
				<Link href='/' className='flex-center'>
					<Image
						src='/assets/icons/logo.svg'
						width={27}
						height={27}
						alt='MERNflix logo'
					/>
					<span className='text-primary text-3xl font-bold'>MERNflix</span>
				</Link>

				<nav className='hidden w-full max-w-xs xl:flex-center'>
					<NavItems />
				</nav>

				<div className='w-32 flex justify-end gap-3'>
					{isLogged ? (
						<ProfileMenu />
					) : (
						<Button onClick={handleClick} size='lg'>
							Login
						</Button>
					)}
					<MobileNav />
				</div>
			</div>
		</header>
	)
}
