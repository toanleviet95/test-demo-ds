export declare class Button {
  /**
   * The class name
   */
  class: string;
  /**
   * The type name
   */
  type: string;
  /**
   * Is disabled
   */
  disabled: boolean;
  private getClassNameFromType;
  private getClassName;
  handleClick(ev: any): void;
  render(): any;
}
