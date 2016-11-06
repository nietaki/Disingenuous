import assert from 'assert';
import * as board from '../../web/static/js/board';

describe('board', function() {
  describe('test', function() {
    it('equals test', function () {
      assert.equal(board.test, "test");
    });
  });

  describe('directions', function() {
    it('contains the expected directions', function() {
      assert(board.directions.has(0))
      assert(board.directions.has(5))
      assert(!board.directions.has(6))
    });
  });
});

function p(x, y) {
  return new board.Point(x, y);
}

describe('Point', function() {
  let fours;
  before(function() {
    fours = new board.Point(4,4);
  })

  describe('constructor', function() {
    it('works', function() {
      assert.equal(fours.x, 4)
      assert.equal(fours.y, 4)
    })
  })

  describe('equals', function() {
    it('works on same items', function() {
      assert(fours.equals(fours));
      assert(fours.equals(new board.Point(4, 4)));
      assert.deepEqual(fours, new board.Point(4, 4));
    })
    it('works on different items', function() {
      assert(!fours.equals(new board.Point(4, 5)));
      assert(!fours.equals(new board.Point(5, 4)));
    })
  })

  describe('moved()', function() {
    it('moves right', function() {
      assert(p(5, 4).equals(fours.moved(0)))
    });
    it('moves left', function() {
      assert(p(3, 4).equals(fours.moved(3)))
    });
    it('moves LD', function() {
      assert(p(5, 5).equals(fours.moved(1)))
    });
  });
});

describe('Tile', function() {
  describe('tileFaces', function() {
    it('has the correct tile count', function() {
      assert.equal(board.Tile.tileFaces.length, 120)
    });
    it('has some of its values set correctly', function() {
      assert.deepEqual(board.Tile.tileFaces[0], [0, 0])
      assert.deepEqual(board.Tile.tileFaces[1], [0, 0])
      assert.deepEqual(board.Tile.tileFaces[4], [0, 0])
      assert.deepEqual(board.Tile.tileFaces[5], [1, 1])

      assert.deepEqual(board.Tile.tileFaces[6 * 5 - 1], [5, 5])
      assert.deepEqual(board.Tile.tileFaces[6 * 5], [0, 1])

      assert.deepEqual(board.Tile.tileFaces[120 - 1], [4, 5])
    });
  })

  describe('constructor', function() {
    it('initializes the values correctly', function() {
      var tile = new board.Tile(119, new board.Point(6, 7));
      assert.equal(tile.id, 119)
      assert.deepEqual(tile.faces, [4, 5])
      assert.equal(tile.face1, 4)
      assert.equal(tile.face2, 5)

      assert.equal(tile.orientation, 1)

      assert.deepEqual(
        tile.positions,
        [new board.Point(6, 7), new board.Point(7, 8)]
      )
    })
  })
})
