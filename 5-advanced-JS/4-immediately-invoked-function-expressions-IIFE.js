/*********************************************
* IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
*/

/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();
*/

// The same as above but immediately invoked, also the score cannot be console logged (data privacy):
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// console.log(score);


(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(2);
