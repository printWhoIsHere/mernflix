'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const BackButton = ({
	label,
	href,
}: {
	label: string
	href: string
}) => {
	return (
		<Button variant='link'>
			<Link href={href}>{label}</Link>
		</Button>
	)
}
