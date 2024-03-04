import { v4 as uuidv4 } from 'uuid'

import { db } from '@/lib/database'
import { getVerificationTokenByEmail } from '@/data/verification-token'

export const generateVerificationToken = async (email: string) => {
	const token = uuidv4()
	const expires = new Date(new Date().getTime() + 3600 * 1000)

	const existingToken = await getVerificationTokenByEmail(email)

	if (existingToken) {
		await db.varficationToken.delete({
			where: {
				id: existingToken.id,
			},
		})
	}

	const verificationToken = await db.varficationToken.create({
		data: {
			email,
			token,
			expires,
		},
	})

	return verificationToken
}
