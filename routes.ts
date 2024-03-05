/**
 * An array of routes that are accessible to the public.
 * These routes don't require authentication.
 * @type {string[]}
 */
export const publicRoutes = [
	'/',
	'/movie',
	'/tv',
	'/genres',
	'/auth/new-verification',
]

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to /settings.
 * @type {string[]}
 */
export const authRoutes = [
	'/auth/login',
	'/auth/register',
	'/auth/error',
	'/auth/reset',
	'/auth/new-password',
]

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purpose.
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'

/**
 * The default redirect path after loggin in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/'
