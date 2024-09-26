const expenseForm = document.querySelector('#expense-form');
const expenseButton = document.querySelector('#expense-button');

const addExpense = function () {

    // let isRunning = true;
    const expenseArray = [];

    // while (isRunning) {
    const categoryInput = document.querySelector('#category-input').value;
    const amountInput = document.querySelector('#amount-input').value;
    const dateInput = document.querySelector('#date-input').value;
    const expenseObject = {
        category: categoryInput,
        amount: amountInput,
        date: dateInput,
    }

    expenseArray.push(expenseObject);
    // isRunning = confirm('Do you want to add another expense?');
    console.table(expenseArray);
    return expenseArray;
}


function initialize() {
    expenseButton.addEventListener('click', addExpense);
    expenseForm.addEventListener('submit', addExpense);
    // J-Query date picker
    $('#date-input').datepicker();

}

initialize();

// create a function that pulls the expenses array from local storage
// this function should return a parsed array of the local storage data; or if that data has not been stored, then return an empty array 
// use JSON.parse 

// DONE call the function that returns the expense array (line 6)
// store that array to a variable
/* DONE create an object 'expenseObject' that would consist of the 3 values that they entered (i.e. categoryInput value) */
// DONE push the object to the expense array
/* overwrite the expense array in local storage with the newly updated array above */