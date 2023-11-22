import type { LinkButtonData } from './Button'
import type { Image } from '../Image'

export interface ActionCardData {
	title: string
	description: string
	image: Image
	button: LinkButtonData
}
