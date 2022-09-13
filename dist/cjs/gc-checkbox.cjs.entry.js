'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b321514a.js');
const utils = require('./utils-3c5260ae.js');

const checkboxCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return utils.format(this.first, this.middle, this.last);
  }
  render() {
    return index.h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = checkboxCss;

exports.gc_checkbox = MyComponent;
