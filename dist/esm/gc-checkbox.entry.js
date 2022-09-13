import { r as registerInstance, h } from './index-67e79c11.js';
import { f as format } from './utils-b93c85bf.js';

const checkboxCss = ":host{display:block}";

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
MyComponent.style = checkboxCss;

export { MyComponent as gc_checkbox };
