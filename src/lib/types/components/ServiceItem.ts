import type { Image } from '../Image'
import type { LinkButtonData } from './Button'

export interface ServiceItemData {
	index: number
	icon: Image
	title: string
	description: string | string[]
	button?: LinkButtonData
}
