import type { Image } from '../Image'

export interface PortfolioItemData {
	index: number
	image: Image
	url: string
  //hover data
	title: string
	description: string
  color: string
  icon: Image
}
