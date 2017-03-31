//import everything
var index = require('../index');

describe("A program to calculate golf handicap indexs", () => {

  it("sum the front nine holes", () => {
    expect(index.frontNine([3,4,5,5,4,6,4,3,5]))
      .toEqual(39);
  });
});