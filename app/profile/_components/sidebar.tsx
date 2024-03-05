'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronFirst, ChevronLast } from 'lucide-react'

import { cn } from '@/lib/utils'

import { PROFILE_NAV_ITEMS } from '@/constants'
import { Button } from '@/components/ui/button'

const Sidebar = () => {
	const pathname = usePathname()
	const [expanded, setExpanded] = useState(false)

	return (
		<aside className='h-full bg-primary'>
			<nav className='h-full flex flex-col bg-background shadow-md'>
				<div className='p-4 pb-2 flex items-center justify-end'>
					<Button
						variant='outline'
						className='px-2'
						onClick={() => setExpanded((curr) => !curr)}
					>
						{expanded ? <ChevronFirst /> : <ChevronLast />}
					</Button>
				</div>

				<ul className='flex-1 flex-col px-3'>
					{PROFILE_NAV_ITEMS.map((item, index) => (
						<li
							key={index}
							className={cn(
								'group relative flex items-center py-2 px-3 my-1 rounded-md cursor-pointer transition-colors hover:bg-primary',
								{
									['bg-primary text-background']: pathname === item.href,
									['border-t shadow-sm mt-10']: index == 3,
								}
							)}
						>
							<item.icon strokeWidth={1} />
							<Link href={item.href} className='flex'>
								<span
									className={`overflow-hidden transition-all ${
										expanded ? 'w-48 ml-3' : 'w-0'
									}`}
								>
									{item.label}
								</span>
							</Link>
							{!expanded && (
								<div className='absolute z-10 left-full rounded-md px-2 py-1 ml-6 bg-gradient-to-tr from-primary to-primary/50 text-background text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0'>
									{item.label}
								</div>
							)}
						</li>
					))}
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar
