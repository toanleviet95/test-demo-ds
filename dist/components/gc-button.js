import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const buttonCss = "button{padding:0 30px;height:41px;border-radius:4px;box-shadow:none;border:0px}button.disabled{opacity:0.5;cursor:not-allowed}button.gc__btn--primary{background:#0881FF;color:#FFF}button.gc__btn--danger{background:#F24843;color:#FFF}button.gc__btn--secondary{background:#E8ECF0;color:#35383D;border:1px solid #DAE1E8}";

const Button = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  static get style() { return buttonCss; }
}, [1, "gc-button", {
    "class": [1],
    "type": [1],
    "disabled": [4]
  }, [[2, "click", "handleClick"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-button"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Button);
      }
      break;
  } });
}

const GcButton = Button;
const defineCustomElement = defineCustomElement$1;

export { GcButton, defineCustomElement };
