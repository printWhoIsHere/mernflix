'use client'

import * as z from 'zod'

import { useState, useTransition } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'

import { newPassword } from '@/actions/new-password'
import { backToLogin } from '@/actions/back-to-login'

import { NewPasswordSchema } from '@/schemas'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { CardWrapper } from '@/components/auth/CardWrapper'

export const NewPasswordForm = () => {
	const searchParams = useSearchParams()
	const token = searchParams.get('token')

	const [error, setError] = useState<string | undefined>('')
	const [success, setSuccess] = useState<string | undefined>('')
	const [visible, setVisible] = useState(false)
	const [isPending, startTransition] = useTransition()

	const form = useForm<z.infer<typeof NewPasswordSchema>>({
		resolver: zodResolver(NewPasswordSchema),
		defaultValues: {
			password: '',
		},
	})

	const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
		setError('')
		setSuccess('')

		startTransition(() => {
			newPassword(values, token).then((data) => {
				setError(data?.error)
				setSuccess(data?.success)
				if (data?.error) {
					setTimeout(() => {
						backToLogin()
					}, 2000)
				}
			})
		})
	}

	return (
		<CardWrapper
			label='Enter a new password'
			backButtonLabel='Back to login'
			backButtonHref='/auth/login'
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
					<div className='space-y-4'>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel>New password</FormLabel>
									<div className='relative flex-center'>
										<FormControl>
											<Input
												{...field}
												disabled={isPending}
												placeholder='******'
												type={visible ? 'text' : 'password'}
											/>
										</FormControl>
										<div
											className='absolute right-2 cursor-pointer p-1 rounded-md hover:bg-primary/20 text-black/20 dark:text-white/20'
											onClick={() => setVisible(!visible)}
										>
											{visible ? <Eye /> : <EyeOff />}
										</div>
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormError message={error} />
						<FormSuccess message={success} />
						<Button type='submit' disabled={isPending} className='w-full'>
							Reset password
						</Button>
					</div>
				</form>
			</Form>
		</CardWrapper>
	)
}
