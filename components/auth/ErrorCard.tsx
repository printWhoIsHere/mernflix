import { CardWrapper } from '@/components/auth/CardWrapper'

export const ErrorCard = () => {
	return (
		<CardWrapper
			label='Oops! Somehint went wrong!'
			backButtonLabel='/auth/login'
			backButtonHref='Back to login'
		>
			<div className='w-full flex-center'></div>
		</CardWrapper>
	)
}
