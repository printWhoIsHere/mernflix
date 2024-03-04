import { db } from '@/lib/database'

export const getVerificationTokenByToken = async (token: string) => {
	try {
		const verificationToken = await db.varficationToken.findFirst({
			where: { token },
		})

		return verificationToken
	} catch {
		return null
	}
}

export const getVerificationTokenByEmail = async (email: string) => {
	try {
		const verificationToken = await db.varficationToken.findFirst({
			where: { email },
		})

		return verificationToken
	} catch {
		return null
	}
}
