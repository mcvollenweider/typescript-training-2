import { Shape } from "./Shape";

//use extends for INHERITANCE
export class Circle extends Shape {
  constructor(theX: number, theY: number, private _radius: number) {
    //call superclass constructor
    super(theX, theY);
  }
  public get radius(): number {
    return this._radius;
  }

  public set radius(value: number) {
    this._radius = value;
  }

  //override the getInfo() method
  getInfo(): string{
    return super.getInfo()+ `, radius=${this._radius}`;
  }
}
