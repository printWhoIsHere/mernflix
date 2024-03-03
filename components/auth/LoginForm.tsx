'use client'

import { Button } from '@/components/ui/button'
import { CardWrapper } from '@/components/auth/CardWrapper'

export const LoginForm = () => {
	return (
		<CardWrapper
			label='Login'
			backButtonLabel="Don't have an account?"
			backButtonHref='/auth/register'
			showSocial
		>
			<Button type='submit' className='w-full'>
				Login
			</Button>
		</CardWrapper>
	)
}
