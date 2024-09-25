const expenseForm = document.querySelector('#expense-form');
const expenseButton = document.querySelector('#expense-button');

// DO ON 9-26-2024
// create a function that pulls the expenses array from local storage
// this function should return a parsed array of the local storage data; or if that data has not been stored, then return an empty array 
// use JSON.parse 


function addExpense() {
    const categoryInput = document.querySelector('#category-input');
    const amountInput = document.querySelector('#amount-input');
    const dateInput = document.querySelector('#date-input');
    
    // call the function that returns the expense array (making above, line 5) - store that array to a variable
    // create an object 'expenseObject' that would consist of the 3 values that they entered (i.e. categoryInput value)
    // push the object to the expense array
    // overwrite the expense array in local storage with the newly updated array above
    console.log(dateInput.value);
}

// J-Query date picker
function initialize() {
    expenseButton.addEventListener('click', addExpense);
    expenseForm.addEventListener('submit', addExpense);
    $('#date-input').datepicker();

}

initialize();


