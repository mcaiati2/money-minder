const expenseForm = document.querySelector('#expense-form');
const expenseButton = document.querySelector('#expense-button');
// const dropdownBtn = document.querySelector('#dropdown-button')

function getExpenses(){
    return JSON.parse(localStorage.getItem('storedExpenses')) || [];
}

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