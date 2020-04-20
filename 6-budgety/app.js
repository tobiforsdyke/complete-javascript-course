// ************************
// Budget Controller
// ************************
var budgetController = (function() {

    // Code

})();


// ************************
// UI Controller
// ************************
var UIController = (function() {

    return {
        getInput: function() {
            return {
                type: document.querySelector('.add__type').value, // will be either inc or exp (+ or -)
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            }; 
        }
    };

})();


// ************************
// Global App Controller
// connects the budget controller and the UI controller
// ************************
var controller = (function(budgetCtrl, UICtrl) {

    // Add Item variable (main code used for the event listeners below):
    var ctrlAddItem = function() {
        // 1. Get the field input data
        var input = UICtrl.getInput();
        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Add the new item to the UI

        // 4. Calculate the budget

        // 5. Display the budget in the UI
        
    }

    // Event listener for the Add button:
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    // Event listener for the Enter key:
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);