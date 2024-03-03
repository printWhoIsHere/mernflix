'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { Menu } from 'lucide-react'

import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/constants'

import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'

const MobileNav = () => {
	const pathname = usePathname()

	return (
		<nav className='xl:hidden flex items-center'>
			<Sheet key='left'>
				<SheetTrigger className='align-middle'>
					<Menu className='cursor-pointer' />
				</SheetTrigger>
				<SheetContent className='flex flex-col gap-6'>
					<SheetHeader>
						<SheetTitle>
							<div className='flex items-center'>
								<Image
									src='/assets/icons/logo.svg'
									width={32}
									height={32}
									alt='MERNflix logo'
								/>
								<span className='text-primary text-3xl'>MERNflix</span>
							</div>
							<Separator className='mt-5' />
						</SheetTitle>
						<ul className='flex w-full flex-col items-start gap-10 pt-20'>
							{NAV_ITEMS.map((item) => (
								<li
									key={item.href}
									className={cn(
										`${navigationMenuTriggerStyle()} group flex justify-start whitespace-nowrap w-full h-full align-top text-3xl`,
										{
											['text-primary font-bold hover:text-primary']:
												pathname === item.href,
										}
									)}
								>
									<Link href={item.href} className='group-hover:scale-110'>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</nav>
	)
}

export default MobileNav
