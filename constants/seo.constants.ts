import { Metadata } from 'next'

export const SITE_NAME = 'MERNflix'

export const NO_INDEX_PAGE: Metadata = {
	robots: {
		index: false,
		follow: false,
	},
}
