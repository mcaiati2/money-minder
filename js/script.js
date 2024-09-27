const expenseForm = document.querySelector('#expense-form');
const expenseButton = document.querySelector('#expense-button');
// const dropdownBtn = document.querySelector('#dropdown-button')

function getExpenses(){
    return JSON.parse(localStorage.getItem('storedExpenses')) || [];
}

<<<<<<< HEAD
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

=======
function addExpense() {

    let expenseArray = getExpenses();

    const categoryInput = document.querySelector('#category-input').value;

    const amountInput = parseFloat(document.querySelector('#amount-input').value);

    const dateInput = document.querySelector('#date-input').value;

    const expenseObject = {
        category: categoryInput,
        amount: amountInput,
        date: dateInput,
    };

    expenseArray.push(expenseObject);

    localStorage.setItem('storedExpenses', JSON.stringify(expenseArray));
    showTable();

    console.log('New expense added! Here are the details: ', expenseObject);
    
}
>>>>>>> 2cd458120d2ff47f9a4ba340cd099f7187eb33d4


// function collectMaxBalanceAmount() {
//     let balanceAmount = JSON.parse(localStorage.getItem('storedBalance')) || [];
//     const balanceInput = document.querySelector('#balance-input').value;

//     localStorage.setItem('storedBalance', JSON.stringify(balanceAmount));

//     console.log('This the balance amount you set: ')

// }



function showTable() {

    let storedExpenses = getExpenses();
    // declares a variable named 'expenseTable' and assigns the value to the first element with the #expense-table class.
    const expenseTable = document.querySelector('#expense-table');

    // clears any existing content inside the expenseTable element by setting its innerHTML property to an empty string - ensures that the table is empty before any new content is added.
    expenseTable.innerHTML = '';

    // this starts a for each loop that iterates over each expense item in the array. the forEach method executes the provided function one time for every element in the array.
    storedExpenses.forEach(function(expense) {
        // Create new table row:
      const newTableRow = document.createElement("tr");

      // create new table data elements for 3 pieces of info stored in object (storedExpenses, in this case) and these will display left to right:
      const amountCell = document.createElement("td");
      // Format the salary as currency
      amountCell.textContent = expense.amount;
      newTableRow.append(amountCell);

      // --

      const categoryCell = document.createElement("td");
      categoryCell.textContent = expense.category;
      newTableRow.append(categoryCell);

      // -- 

      const dateCell = document.createElement("td");
      dateCell.textContent = expense.date;
      newTableRow.append(dateCell);
  
      expenseTable.append(newTableRow);

        // injects the HTML created above into the element named expenseTable that we declared at the top of the section. beforeend adds the HTML to the end of the existing table.
    });
    console.log('These are the current stored expenses:', storedExpenses);

}



/* EVENT LISTENERS */

function initialize() {
    // dropdownBtn.addEventListener('click', );
    expenseButton.addEventListener('click', addExpense);
    expenseForm.addEventListener('submit', addExpense);
    $('#date-input').datepicker();
    showTable();

}

<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all dropdowns
    var dropdownElements = document.querySelectorAll('.dropdown-toggle');
    dropdownElements.forEach(function (dropdown) {
        new bootstrap.Dropdown(dropdown);
    });
});

// call the initilize function to set up the event listeners and date picker when the script runs
=======
>>>>>>> 2cd458120d2ff47f9a4ba340cd099f7187eb33d4
initialize();




// // ------------------------------------------------------------------------------
// // Table function 
// const displayExpense = function(expenseArray) {
//     // Get the employee table
//     const expenseTable = document.querySelector('#expense-table');
  
//     // Clear the employee table
//     expenseTable.innerHTML = '';
  
//     // Loop through the employee data and create a row for each employee
//     for (let i = 0; i < expenseArray.length; i++) {
//       const currentExpense = expenseArray[i];
//       // Create new table row:
//       const newTableRow = document.createElement("tr");


//       // create new table data elements for 3 pieces of info stored in object (currentEmployee, in this case) and these will display left to right:
//       const amountCell = document.createElement("td");
//       // Format the salary as currency
//       amountCell.textContent = currentExpense.amount.toLocaleString("en-US",{
//         style:"currency",
//         currency:"USD"
//       });
//       newTableRow.append(amountCell);

//       // --

//       const descriptionCell = document.createElement("td");
//       descriptionCell.textContent = currentExpense.description;
//       newTableRow.append(descriptionCell);

//       // --

//       const dateCell = document.createElement("td");
//       dateCell.textContent = currentExpense.date;
//       newTableRow.append(dateCell);
  
//       expenseTable.append(newTableRow);
//     }
//   }