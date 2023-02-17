"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
//use extends for INHERITANCE
class Circle extends Shape_1.Shape {
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    constructor(theX, theY, _radius) {
        //call superclass constructor
        super(theX, theY);
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    //override the getInfo() method
    getInfo() {
        return super.getInfo() + `, radius=${this._radius}`;
    }
}
exports.Circle = Circle;
