import type { Image } from '../Image'

export interface EmployeeData {
	image: Image
	name: string
	function: string
	intro: string
	skills: string[]
	// Modal fields
	description?: string
	linkedin?: string
	github?: string
}
