'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b321514a.js');
const utils = require('./utils-3c5260ae.js');

const buttonCss = "button{padding:0 30px;height:41px;border-radius:4px;box-shadow:none;border:0px}button.disabled{opacity:0.5;cursor:not-allowed}button.gc__btn--primary{background:#0881FF;color:#FFF}button.gc__btn--danger{background:#F24843;color:#FFF}button.gc__btn--secondary{background:#E8ECF0;color:#35383D;border:1px solid #DAE1E8}";

const Button = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getClassNameFromType() {
    return `gc__btn--${this.type}`;
  }
  getClassName() {
    return this.class ? `${this.disabled ? 'disabled' : ''} ${this.getClassNameFromType()} ${this.class}` : `${this.getClassNameFromType()}`;
  }
  handleClick(ev) {
    if (this.disabled) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    console.log('click', ev);
  }
  render() {
    return index.h("button", { class: this.getClassName() }, index.h("slot", null));
  }
};
Button.style = buttonCss;

const myComponentCss = ":host{display:block}";

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
MyComponent.style = myComponentCss;

exports.gc_button = Button;
exports.my_component = MyComponent;
