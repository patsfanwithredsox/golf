//sums of strokes from holes 1-9

var frontNine = [3,4,5,5,4,6,4,3,5].reduce((a, b) => a + b, 0);
	return console.log(frontNine); // 39

//sum of strokes from holes 10-18

var backNine = [4,5,4,4,3,6,5,4,5].reduce((a,b) => a + b, 0);
	return console.log(backNine);  //40

//calculate Gross score 
// x = console.log(frontNine)
// y = console.log(backNine)
// fuction(AGS) = (x + y) 





module.export.frontNine = frontNine
module.export.backNine = backNine