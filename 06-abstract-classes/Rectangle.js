"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
//use extends for INHERITANCE
class Rectangle extends Shape_1.Shape {
    calculateArea() {
        return this._width * this._length;
    }
    constructor(theX, theY, _width, _length) {
        super(theX, theY);
        this._width = _width;
        this._length = _length;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this.length = value;
    }
    //override the getInfo() method
    getInfo() {
        return super.getInfo() + `, width=${this._width}, length=${this._length}`;
    }
}
exports.Rectangle = Rectangle;
