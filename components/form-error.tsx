import { AlertTriangle } from 'lucide-react'

interface FormErrorProps {
	message?: string
}

export const FormError = ({ message }: FormErrorProps) => {
	if (!message) return null

	return (
		<div className='bg-destructive/15 dark:bg-red-500/70 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive dark:text-black'>
			<AlertTriangle />
			<p>{message}</p>
		</div>
	)
}
