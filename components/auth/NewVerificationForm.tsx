'use client'

import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { backToLogin } from '@/actions/back-to-login'

import { newVerification } from '@/actions/new-verification'
import { CardWrapper } from '@/components/auth/CardWrapper'
import { Loader } from '@/components/loader'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'

export const NewVerificationForm = () => {
	const [error, setError] = useState<string | undefined>('')
	const [success, setSuccess] = useState<string | undefined>('')
	const searchParams = useSearchParams()

	const token = searchParams.get('token')
	const onSubmit = useCallback(() => {
		if (success || error) return

		if (!token) {
			setError('Missing token!')
			return
		}

		newVerification(token)
			.then((data) => {
				setError(data.error)
				setSuccess(data.success)
				if (data?.success) {
					setTimeout(() => {
						backToLogin()
					}, 2000)
				}
			})
			.catch(() => {
				setError('Something went wrong!')
			})
	}, [token, success, error])

	useEffect(() => {
		onSubmit()
	}, [onSubmit])

	return (
		<CardWrapper
			label='Confirming your verification'
			backButtonLabel='Back to login'
			backButtonHref='/auth/login'
		>
			<div className='w-full flex-center'>
				{!success && !error && <Loader />}
				<FormSuccess message={success} />
				{!success && <FormError message={error} />}
			</div>
		</CardWrapper>
	)
}
