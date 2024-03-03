'use server'

import * as z from 'zod'
import bcrypt from 'bcryptjs'

import { db } from '@/lib/database'
import { LoginSchema, RegisterSchema } from '@/schemas'
import { getUserByEmail } from '@/actions/users'

export const login = async (values: z.infer<typeof LoginSchema>) => {
	const validatedFields = LoginSchema.safeParse(values)

	if (!validatedFields.success) {
		return { error: 'Invalid fields!' }
	}

	return { success: 'Email sent!' }
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
