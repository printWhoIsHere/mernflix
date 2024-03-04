import { motion } from 'framer-motion'

export const Loader = () => {
	return (
		<div className='w-full h-full flex items-center justify-center'>
			<motion.div
				className='w-20 h-5 flex justify-around'
				variants={{
					initial: {
						transition: {
							staggerChildren: 0.2,
							repeat: Infinity,
						},
					},
					animate: {
						transition: {
							staggerChildren: 0.2,
						},
					},
				}}
				initial='initial'
				animate='animate'
			>
				<motion.span
					className={DotClassName}
					variants={DotVariants}
					transition={DotTransition}
				/>
				<motion.span
					className={DotClassName}
					variants={DotVariants}
					transition={DotTransition}
				/>
				<motion.span
					className={DotClassName}
					variants={DotVariants}
					transition={DotTransition}
				/>
			</motion.div>
		</div>
	)
}

const DotClassName = 'block w-5 h-5 bg-primary rounded-full'
const DotVariants = {
	initial: {
		y: '0%',
	},
	animate: {
		y: ['0%', '100%', '0%'],
	},
}
const DotTransition = {
	duration: 1,
	yoyo: Infinity,
	repeat: Infinity,
	repeatDelay: 1,
	ease: 'easeInOut',
}
