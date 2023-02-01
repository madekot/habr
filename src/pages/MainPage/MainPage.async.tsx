import {lazy} from "react";
export const MainPageAsync = lazy( () => new Promise(resolve => {
  // @ts-ignore
  // для удобства разработки, в проде этого не будет
  setTimeout(() => resolve(import('./MainPage')), 1500)
}));
