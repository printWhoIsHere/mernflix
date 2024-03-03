import { User } from 'lucide-react'

import { ToggleMode } from '@/components/toggle-mode'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'

export const ProfileMenu = () => {
	return (
		<Popover>
			<PopoverTrigger>
				<div className='flex items-center space-x-4 px-0 md:px-2 rounded-md hover:bg-secondary'>
					<Avatar>
						<AvatarImage src='https://github.com/shadcn.png' />
						<AvatarFallback>
							<User size={20} />
						</AvatarFallback>
					</Avatar>
					<div className='hidden xl:block text-start'>
						<p className='text-sm font-medium leading-none'>Username</p>
						<p className='text-sm text-muted-foreground'>username@gmail.com</p>
					</div>
				</div>
			</PopoverTrigger>
			<PopoverContent>
				<div className='grid gap-4'>
					<div className='space-y-2'>
						<h4 className='font-medium leading-none'>Username</h4>
						<p className='text-sm text-muted-foreground'>Your text</p>
					</div>
					<div className='grid gap-2'>
						<div className='grid grid-cols-3 items-center gap-4'>Profile</div>
						<div className='grid grid-cols-3 items-center gap-4'>Friends</div>
						<div className='grid grid-cols-3 items-center gap-4'>Settings</div>
						<div className='grid items-center gap-4'>
							<ToggleMode />
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
