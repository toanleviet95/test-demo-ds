import { r as registerInstance, h } from './index-67e79c11.js';
import { f as format } from './utils-b93c85bf.js';

const buttonCss = "button{padding:0 30px;height:41px;border-radius:4px;box-shadow:none;border:0px}button.disabled{opacity:0.5;cursor:not-allowed}button.gc__btn--primary{background:#0881FF;color:#FFF}button.gc__btn--danger{background:#F24843;color:#FFF}button.gc__btn--secondary{background:#E8ECF0;color:#35383D;border:1px solid #DAE1E8}";

const Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return h("button", { class: this.getClassName() }, h("slot", null));
  }
};
Button.style = buttonCss;

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

export { Button as gc_button, MyComponent as my_component };
