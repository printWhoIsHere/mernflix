import NextAuth from 'next-auth'

import authConfig from '@/auth.config'
import {
	publicRoutes,
	authRoutes,
	apiAuthPrefix,
	DEFAULT_LOGIN_REDIRECT,
} from '@/routes'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
	const { nextUrl } = req
	const isLoggenIn = !!req.auth

	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
	const isAuthRoute = authRoutes.includes(nextUrl.pathname)

	if (isApiAuthRoute) {
		return
	}

	if (isAuthRoute) {
		if (isLoggenIn) {
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
		}
		return
	}

	if (!isLoggenIn && !isPublicRoute) {
		return Response.redirect(new URL('/auth/login', nextUrl))
	}

	return
})

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
