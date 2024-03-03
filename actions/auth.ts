'use server'

import * as z from 'zod'
import bcrypt from 'bcryptjs'
import { AuthError } from 'next-auth'

import { signIn } from '@/auth'
import { db } from '@/lib/database'
import { getUserByEmail } from '@/actions/users'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { LoginSchema, RegisterSchema } from '@/schemas'

export const login = async (values: z.infer<typeof LoginSchema>) => {
	const validatedFields = LoginSchema.safeParse(values)

	if (!validatedFields.success) {
		return { error: 'Invalid fields!' }
	}

	const { email, password } = validatedFields.data

	try {
		await signIn('credentials', {
			email,
			password,
			redirectTo: DEFAULT_LOGIN_REDIRECT,
		})
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return { error: 'Invalid credentials!' }
				default:
					return { error: 'Something went wrong!' }
			}
		}

		throw error
	}
}

export const register = async (values: z.infer<typeof RegisterSchema>) => {
	const validatedFields = RegisterSchema.safeParse(values)

	if (!validatedFields.success) {
		return { error: 'Invalid fields!' }
	}

	const { email, password, name } = validatedFields.data
	const hashedPassword = await bcrypt.hash(password, 10)

	const existingUser = await getUserByEmail(email)

	if (existingUser) {
		return { error: 'Email already in use!' }
	}

	await db.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
		},
	})

	// TODO: Create verification!

	return { success: 'User created!' }
}
