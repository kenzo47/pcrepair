import type { LinkButtonData } from '../Button'
import type { SubInfoItemData } from './SubInfoItem'

export interface InfoItemData {
	title: string
	description: string
	subInfoItems: SubInfoItemData[]
	button?: LinkButtonData
}
