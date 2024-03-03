'use client'

import { Button } from '@/components/ui/button'
import { CardWrapper } from '@/components/auth/CardWrapper'

export const RegisterForm = () => {
	return (
		<CardWrapper
			label='Create an account'
			backButtonLabel='Do you have an account?'
			backButtonHref='/auth/login'
			showSocial
		>
			<Button type='submit' className='w-full'>
				Create an account
			</Button>
		</CardWrapper>
	)
}
