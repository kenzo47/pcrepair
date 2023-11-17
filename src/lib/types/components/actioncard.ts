import type { LinkButton } from '../button'
import type { Image } from '../image'

export interface ActionCard {
	title: string
	description: string
	image: Image
	button: LinkButton
}
