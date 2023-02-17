import { Shape } from "./Shape";

//use extends for INHERITANCE
export class Rectangle extends Shape {
  constructor(
    theX: number,
    theY: number,
    private _width: number,
    private _length: number
  ) {
    super(theX, theY);
  }
  public get width(): number {
    return this._width;
  }

  public set width(value: number) {
    this._width = value;
  }

  public get length(): number {
    return this._length;
  }

  public set length(value: number) {
    this.length = value;
  }

  //override the getInfo() method
  getInfo(): string {
    return super.getInfo() + `, width=${this._width}, length=${this._length}`;
  }
}
