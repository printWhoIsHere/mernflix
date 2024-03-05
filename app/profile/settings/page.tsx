'use client'

import { logout } from '@/actions/logout'
import { useCurrentUser } from '@/hooks/use-current-user'

export default function SettingsPage() {
	const user = useCurrentUser()

	const onClick = () => {
		logout()
	}

	return <div className='w-full h-full bg-white/20'></div>
}
