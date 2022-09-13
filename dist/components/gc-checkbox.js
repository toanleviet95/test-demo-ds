import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { f as format } from './utils.js';

const checkboxCss = ":host{display:block}";

const MyComponent = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
  static get style() { return checkboxCss; }
}, [1, "gc-checkbox", {
    "first": [1],
    "middle": [1],
    "last": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-checkbox"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-checkbox":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyComponent);
      }
      break;
  } });
}

const GcCheckbox = MyComponent;
const defineCustomElement = defineCustomElement$1;

export { GcCheckbox, defineCustomElement };
