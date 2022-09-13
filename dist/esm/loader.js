import { p as promiseResolve, b as bootstrapLazy } from './index-67e79c11.js';

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["gc-button_2",[[1,"gc-button",{"class":[1],"type":[1],"disabled":[4]},[[2,"click","handleClick"]]],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["gc-checkbox",[[1,"gc-checkbox",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

export { defineCustomElements };
