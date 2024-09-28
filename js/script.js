const expenseForm = document.querySelector('#expense-form');
const expenseButton = document.querySelector('#expense-button');
const dropdownBtn = document.querySelector('#dropdown-button')
const limitForm = document.querySelector('#limit-form');
const limitButton = document.querySelector('#limit-button');
const totalDisplay = document.querySelector('#total-display');

function getExpenses() {
    return JSON.parse(localStorage.getItem('storedExpenses')) || [];
}

function getLimitAmount() {
    return JSON.parse(localStorage.getItem('storedLimitAmount')) || 0;
}

function getTotalExpenseAmount() {
    return JSON.parse(localStorage.getItem('storedTotalExpenses')) || 0;
}

function addExpense() {

    let expenseArray = getExpenses();

    const categoryInput = document.querySelector('#category-input').value;

    const amountInput = parseFloat(document.querySelector('#amount-input').value);

    const dateInput = document.querySelector('#date-input').value;

    const expenseObject = {
        category: categoryInput,
        amount: ('$' + amountInput),
        date: dateInput,
    };

    expenseArray.push(expenseObject);

    localStorage.setItem('storedExpenses', JSON.stringify(expenseArray));
    showTable();
    showTotalExpenses();

    console.log('New expense added! Here are the details: ', expenseObject);
    
}


function addLimitAmount() {
    
    let limitAmount = getLimitAmount();
    console.log('test: ', limitAmount);

    const limitInput = Number(document.querySelector('#limit-input').value);

    limitAmount = limitInput;

    localStorage.setItem('storedLimitAmount', JSON.stringify(limitAmount));
    showLimitAmount();

    console.log('New limit set! Here is the amount: ', limitAmount);

}

function calculateTotalExpenses() {
    let expenseArray = getExpenses();

    // Extract amounts and convert them to numbers
    let total = expenseArray.reduce((sum, expense) => {
        return sum + parseFloat(expense.amount.replace('$', ''));
    }, 0);
    localStorage.setItem('storedTotalExpenses', JSON.stringify(total));

    console.log(total, 'is the total amount of expenses.');
    return total;

    
}

function showTotalExpenses() {
    let storedTotalExpenses = calculateTotalExpenses();

    let displayedTotal = document.querySelector('#total-display');

    displayedTotal.innerHTML = '';

    let displayedTotalHTML = `
    <h2 class="total-display">Total Expenses:
    $${storedTotalExpenses}</h3>
    `;
    displayedTotal.insertAdjacentHTML('beforeend', displayedTotalHTML);

}

function showLimitAmount() {

    let storedLimitAmount = getLimitAmount();

    let displayedLimit = document.querySelector('#limit-display');

    displayedLimit.innerHTML = '';

    let displayedLimitHTML = `
    <h3 class="limit-display">Monthly Limit: 
        $${storedLimitAmount}</h3>
    `;
    displayedLimit.insertAdjacentHTML(
    'beforeend', displayedLimitHTML);

}


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

// The main buttons exist in the HTML! That's why there's no reference to them here!

function initialize() {
    // dropdownBtn.addEventListener('click', );
    expenseForm.addEventListener('submit', addExpense);

    // TODO why do we need click?
    expenseButton.addEventListener('click', addExpense);


    limitForm.addEventListener('submit', addLimitAmount);
    limitButton.addEventListener('click', addLimitAmount);

    

    // I had this and it was putting in a new value of 0 time they clicked inside the form VVV
    // limitForm.addEventListener('click', addLimitAmount);

    $('#date-input').datepicker();
    showTable();
    showLimitAmount();
    showTotalExpenses();


    /* 
    limitButton is the DOM element for the Save Changes button on the Adjust Monthly Limit button.

    addEventListener is the method that listens for browser events

    'click' event is triggered when the user clicks on the limitButton (Save Changes button on the Adjust Monthy Limit button.)

    submit is doing the exact same thing but also allowing for the user to click enter.
    */



    /*
    limitForm is the DOM element for the blank text box under 'Limit' txxt where you input the number. That is considered a form!

    addEventListener is the method that listens for browser events

    'submit' event is triggered when the form is submitted.
    */
    
}

initialize();