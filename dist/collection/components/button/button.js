import { Component, Prop, Listen, h } from '@stencil/core';
export class Button {
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
    return h("button", { class: this.getClassName() },
      h("slot", null));
  }
  static get is() { return "gc-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["button.css"]
  }; }
  static get properties() { return {
    "class": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The class name"
      },
      "attribute": "class",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The type name"
      },
      "attribute": "type",
      "reflect": false
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Is disabled"
      },
      "attribute": "disabled",
      "reflect": false
    }
  }; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": undefined,
      "capture": true,
      "passive": false
    }]; }
}
