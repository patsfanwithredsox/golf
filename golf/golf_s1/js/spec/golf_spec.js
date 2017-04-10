//import everything
var index = require('../index');

describe("A program to calculate golf handicap indexs", () => {

  it("sum all strokes from round", () => {
  	expect(index.totalStrokes([3,4,5,5,4,6,4,3,5,3,4,4,4,5,3,4,5,4]))
  	.toEqual(75);
  });
});