import type { Image } from '../Image'
import type { LinkButtonData } from './Button'

export interface ServiceItemData {
	icon: Image
	title: string
	description: string | string[]
	button?: LinkButtonData
}
