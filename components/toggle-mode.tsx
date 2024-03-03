'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export function ToggleMode() {
	const { theme, setTheme } = useTheme()

	const handleToggleChange = (isChecked: boolean) => {
		if (isChecked) {
			setTheme('light')
		} else {
			setTheme('dark')
		}
	}

	return (
		<div className='flex items-center space-x-2'>
			<Switch
				id='toggle-mode'
				onCheckedChange={handleToggleChange}
				checked={theme === 'dark' ? false : true}
			/>
			<Label htmlFor='toggle-mode'>{theme} mode</Label>
		</div>
	)
}
