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
    it('moves left', function() {
      assert(p(5, 4).equals(fours.moved(0)))
    });
    it('moves LD', function() {
      assert(p(5, 5).equals(fours.moved(1)))
    });
  });
})
