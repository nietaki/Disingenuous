export let test = "test"
import assert from 'assert'


export const directions = new Set([0, 1, 2, 3, 4, 5])
// indices               0, 1, 2,  3,  4,  5
export const xOffsets = [1, 1, 0, -1, -1,  0]
export const yOffsets = [0, 1, 1,  0, -1, -1]

Object.freeze(directions)

export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(otherPoint) {
    assert(typeof(otherPoint) != "undefined")
    assert(typeof(otherPoint.x) != "undefined")
    assert(typeof(otherPoint.y) != "undefined")

    return (this.x == otherPoint.x) && (this.y == otherPoint.y)
  }

  get copy() {
    return new Point(this.x, this.y)
  }

  moved(dir) {
    return new Point(this.x + xOffsets[dir], this.y + yOffsets[dir])
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}


let _tileFaces;
export class Tile {

  constructor(id, anchor) {
    assert(anchor.constructor.name == Point.name)

    this.id = id;
    this.anchor = anchor;
    this.orientation = 1; //LD
  }

  get faces() {
    return Tile.tileFaces[this.id]
  }

  get face1() {
    return this.faces[0]
  }

  get face2() {
    return this.faces[1]
  }

  get positions() {
    return [this.anchor.copy, this.anchor.moved(this.orientation)]
  }

  // static functions

  static generateTileFaces() {
    var ret = []
    for (var face = 0; face < 6; face++) {
      for(var copyNo = 0; copyNo < 5; copyNo++) {
        ret.push([face, face]);
      }
    }

    for (var f1 = 0; f1 < 6; f1++) {
      for (var f2 = f1 + 1; f2 < 6; f2++) {
        for(var copyNo = 0; copyNo < 6; copyNo++) {
          ret.push([f1, f2]);
        }
      }
    }
    return ret;
  }

  static get tileFaces() {
    return _tileFaces
  }
}

_tileFaces = Tile.generateTileFaces()
