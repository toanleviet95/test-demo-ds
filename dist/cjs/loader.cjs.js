'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b321514a.js');

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["gc-button_2.cjs",[[1,"gc-button",{"class":[1],"type":[1],"disabled":[4]},[[2,"click","handleClick"]]],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["gc-checkbox.cjs",[[1,"gc-checkbox",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
