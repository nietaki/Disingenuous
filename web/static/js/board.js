export let test = "test"
import assert from 'assert'


export const directions = new Set([0, 1, 2, 3, 4, 5])
Object.freeze(directions)

export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(otherPoint) {
    assert(typeof(otherPoint.x) != "undefined")
    assert(typeof(otherPoint.y) != "undefined")

    return (this.x == otherPoint.x) && (this.y == otherPoint.y)
  }

  moved(direction) {
    switch (direction) {
      case 0:
        return new Point(this.x + 1, this.y)
      default:
        assert(direction >= 0 && direction < 6)
    }
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}
