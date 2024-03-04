import { CardWrapper } from '@/components/auth/CardWrapper'

export const ErrorCard = () => {
	return (
		<CardWrapper
			label='Oops! Somehint went wrong!'
			backButtonLabel='Back to login'
			backButtonHref='/auth/login'
		>
			<div className='w-full flex-center'></div>
		</CardWrapper>
	)
}
