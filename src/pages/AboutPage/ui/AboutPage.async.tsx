import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // для удобства разработки, в проде этого не будет
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
