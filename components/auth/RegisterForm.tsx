'use client'

import * as z from 'zod'

import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'

import { register } from '@/actions/register'

import { RegisterSchema } from '@/schemas'
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

export const RegisterForm = () => {
	const [error, setError] = useState<string | undefined>('')
	const [success, setSuccess] = useState<string | undefined>('')
	const [isPending, startTransition] = useTransition()

	const [visible, setVisible] = useState(false)

	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: '',
			password: '',
			name: '',
		},
	})

	const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
		setError('')
		setSuccess('')

		startTransition(() => {
			register(values).then((data) => {
				setError(data.error)
				setSuccess(data.success)
			})
		})
	}

	return (
		<CardWrapper
			label='Register'
			backButtonLabel='You have an account?'
			backButtonHref='/auth/login'
			showSocial
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
					<div className='space-y-4'>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input {...field} disabled={isPending} placeholder='Name' />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled={isPending}
											placeholder='example@gmail.com'
											type='email'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
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
					</div>
					<FormError message={error} />
					<FormSuccess message={success} />
					<Button type='submit' disabled={isPending} className='w-full'>
						Create an account
					</Button>
				</form>
			</Form>
		</CardWrapper>
	)
}
