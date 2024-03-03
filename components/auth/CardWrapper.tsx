import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { BackButton } from '@/components/auth/BackButton'
import { Social } from '@/components/auth/Social'

export const CardWrapper = ({
	children,
	label,
	backButtonLabel,
	backButtonHref,
	showSocial,
}: {
	children: React.ReactNode
	label: string
	backButtonLabel: string
	backButtonHref: string
	showSocial?: boolean
}) => {
	return (
		<Card className='w-[400px] shadow-md'>
			<CardHeader>
				<CardTitle>{label}</CardTitle>
			</CardHeader>
			<CardContent>{children}</CardContent>
			{showSocial && (
				<CardFooter>
					<Social />
				</CardFooter>
			)}
			<CardFooter>
				<BackButton label={backButtonLabel} href={backButtonHref} />
			</CardFooter>
		</Card>
	)
}
