import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
import type { LayoutLoad } from './$types';

injectSpeedInsights();

export const load: LayoutLoad = async({ url }) => {

	return {
		url: url.pathname
	}
}
