'use strict';

const index = require('./index-b321514a.js');

/*
 Stencil Client Patch Browser v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('gc-web-design-system.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["gc-button_2.cjs",[[1,"gc-button",{"class":[1],"type":[1],"disabled":[4]},[[2,"click","handleClick"]]],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["gc-checkbox.cjs",[[1,"gc-checkbox",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
