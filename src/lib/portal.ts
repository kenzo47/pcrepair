export const portal = (node: HTMLDivElement) => {
	document.querySelector('main')?.appendChild(node).focus()
}
