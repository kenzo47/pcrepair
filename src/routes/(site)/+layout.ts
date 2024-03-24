import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
import type { LayoutLoad } from './$types';

inject();
injectSpeedInsights();

export const load: LayoutLoad = async ({ url }) => {
	return {
		url: url.pathname,
	};
};
