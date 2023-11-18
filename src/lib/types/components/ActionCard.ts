import type { LinkButton } from '../Button'
import type { Image } from '../Image'

export interface ActionCard {
	title: string
	description: string
	image: Image
	button: LinkButton
}
