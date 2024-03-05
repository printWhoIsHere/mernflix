import { LucideIcon, User, Users, Heart, Settings } from 'lucide-react'

export const NAV_ITEMS: { label: string; href: string }[] = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Movies',
		href: '/movies',
	},
	{
		label: 'TV Shows',
		href: '/tv',
	},
	{
		label: 'Genres',
		href: '/genres',
	},
]

export const PROFILE_NAV_ITEMS: {
	label: string
	href: string
	icon: LucideIcon
}[] = [
	{
		label: 'Profile',
		href: '/profile',
		icon: User,
	},
	{
		label: 'Friends',
		href: '/profile/friends',
		icon: Users,
	},
	{
		label: 'Favourites',
		href: '/favourites',
		icon: Heart,
	},
	{
		label: 'Settings',
		href: '/profile/settings',
		icon: Settings,
	},
]
