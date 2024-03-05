'use client'

import Link from 'next/link'
import { User } from 'lucide-react'

import { logout } from '@/actions/logout'
import { PROFILE_NAV_ITEMS } from '@/constants'

import { Button } from '@/components/ui/button'
import { ToggleMode } from '@/components/toggle-mode'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { useCurrentUser } from '@/hooks/use-current-user'
import { LogoutButton } from './LogoutButton'

export const UserButton = () => {
	const user = useCurrentUser()

	const handleClick = () => {
		logout()
	}
	return (
		<Popover>
			<PopoverTrigger>
				<div className='flex items-center space-x-4 px-0 md:px-2 rounded-md hover:bg-secondary'>
					<Avatar>
						<AvatarImage src={user?.image || ''} />
						<AvatarFallback>
							<User size={20} />
						</AvatarFallback>
					</Avatar>
					<div className='hidden xl:block text-start'>
						<p className='text-sm font-medium leading-none'>{user?.name}</p>
						<p className='text-sm text-muted-foreground'>{user?.email}</p>
					</div>
				</div>
			</PopoverTrigger>
			<PopoverContent>
				<div className='grid gap-4'>
					<div className='flex-between'>
						<h4 className='font-medium leading-none'>{user?.name}</h4>
						<LogoutButton>
							<Button
								variant='link'
								className='text-sm text-muted-foreground'
								onClick={handleClick}
							>
								Logout
							</Button>
						</LogoutButton>
					</div>
					<div className='grid gap-2'>
						{PROFILE_NAV_ITEMS.map((item) => (
							<div
								key={item.href}
								className='grid grid-cols-3 items-center gap-4 hover:underline'
							>
								<Link href={item.href}>{item.label}</Link>
							</div>
						))}
						<div className='grid items-center gap-4'>
							<ToggleMode />
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
