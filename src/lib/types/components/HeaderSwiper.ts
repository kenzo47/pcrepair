import type { Image } from '../Image'
import type { LinkButtonData } from './Button'

export interface HeaderSwiperData {
	image: Image
	title: string
	description: string
	button: LinkButtonData
}
