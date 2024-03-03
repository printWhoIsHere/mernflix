import { CheckCircle } from 'lucide-react'

interface FormSuccessProps {
	message?: string
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
	if (!message) return null

	return (
		<div className='bg-emerald-500/15 dark:bg-emerald-500/70 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500 dark:text-black'>
			<CheckCircle />
			<p>{message}</p>
		</div>
	)
}
