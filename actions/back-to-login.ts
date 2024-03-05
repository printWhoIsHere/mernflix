'use server'

import { redirect } from 'next/navigation'

export const backToLogin = () => {
	redirect('/auth/login')
}
