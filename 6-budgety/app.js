// ************************
// Budget Controller
// ************************
var budgetController = (function() {

    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }

})();


// ************************
// UI Controller
// ************************
var UIController = (function() {

    // Some code

})();


// ************************
// Controller - connects the budget controller and the UI controller
// ************************
var controller = (function(budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);
    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);