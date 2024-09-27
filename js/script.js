/* 
Lines 7 and 8 are delcaring variables named expenseForm and expenseButton and assigning the values. it looks for HTML element on the HTML document with ID #expense-form and #expense-button and assigns their values to to the corresponding variable. 
queryselector method allows you to select the first element within the document that matches the specified CSS selector. 

Recap- we're storing the HTML element in a JS variable so that we can access the values entered in those fields and add event listeners. Gives us access to them.
 */
const expenseForm = document.querySelector('#expense-form');
const expenseButton = document.querySelector('#expense-button');


/*
line 34 is declaring a variable named expenseArray, and assigning the value.

localStorage.getItem('expenses') - retrieves the value associated with the key 'expenses' from the browser's localStorage.

localStorage is a global object provided by the browser's api

JSON.parse() takes the string retrieved from localStorage and converts it back into a JS object or array

|| [] if the result of JSON.parse(localStorage.getItem('storedExpenses')) is null or any other falsy value, it defaults to an empty array. [] is used for error handling as a fallback value to ensure that expenseArray is initialized as an empty array if there is no data stored in localStorage under the key storedExpenses (or if the data is invalid, i.e. 'null'. in place).

Summary:
Initialize expenseArray with the storedExpenses if they exist OR with an empty array if they don't exist.

As a result, emptyArray will be an array containing the storedExpenses, or an empty array if no expenses are stored.

The value of expenseArray will be stored with the key named 'storedExpenses'
*/


// defines a function named addExpense that will be executed WHEN CALLED
function addExpense(event) {

    event.preventDefault();

    const expenseList = [];

    let keepAsking = true;
    while (keepAsking) {
        // these 3 select the related HTML elements, retrieve their values, and store them in the variables categoryInput, amountInput, dateInput.
        const categoryInput = document.querySelector('#category-input').value;

        // parseFloat is more useful than parseInt for our app because it can handle decimals.
        const amountInput = parseFloat(document.querySelector('#amount-input').value);

        const dateInput = document.querySelector('#date-input').value;

        const expenseObject = {
            category: categoryInput,
            amount: amountInput,
            date: dateInput,
        };
        expenseList.push(expenseObject);

        let continueAsking = confirm('Add another expense?');
        if (!continueAsking) {
            keepAsking = false;
        } else {
            // Clear the form fields for the next input
            document.querySelector('#category-input').value = '';
            document.querySelector('#amount-input').value = '';
            document.querySelector('#date-input').value = '';
        }

    }


    let expenseArray = JSON.parse(localStorage.getItem('storedExpenses')) || [];
    expenseArray = expenseArray.concat(expenseList);
    localStorage.setItem('storedExpenses', JSON.stringify(expenseArray));
};

// object literal block. creates an object expenseObject with category, amount, and date properties and assigns the user's input to those values



// adds the expenseObject to the expenseArray

/*
Line 67 - localStorage (same global object we referenced outside the function, more info on lines 14 - 16)

.setItem(); method adding a key:value pair to localStorage object

takes two arguments: the key (string) and the value (also a string). in this case, we converted the amount to an number with parseFloat() so that we can handle decimal points.

storedExpenses is the key we used above to store the data in local storage (keys are unique- if we use the same key again, it will overwrite the value)

JSON.stringify() is a method that converts a JS object or array into a JSON string

expenseArray is the array we are storing in localStorage - we have to use the JSON.stringify() method BEFORE storing it since it's an array since localStorage can ONLY store strings
*/

// localStorage.setItem('storedExpenses', JSON.stringify(expenseArray));

// // Creates a console log showing the property:value pairs of the expenseObject that was just created.
// console.log('New expense added! Here are the details: ', expenseObject);



/* EVENT LISTENERS */

// defines a function named 'initialize', which is executed when called
function initialize() {

    // adds an event listener to the expenseButton button that calls the addExpense function when clicked
    expenseButton.addEventListener('click', addExpense);

    // adds an event listener to the expenseForm that calls the addExpense function when the form is submitted
    expenseForm.addEventListener('submit', addExpense);

    // initilizes a jQuery date picker on the element with the the ID date-input.
    $('#date-input').datepicker();

}

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all dropdowns
    var dropdownElements = document.querySelectorAll('.dropdown-toggle');
    dropdownElements.forEach(function (dropdown) {
        new bootstrap.Dropdown(dropdown);
    });
});

// call the initilize function to set up the event listeners and date picker when the script runs
initialize();


// TODO - do we define line 30 outside the addExpense function? 