const expenseForm = document.querySelector('#expense-form');
const expenseButton = document.querySelector('#expense-button');

function addExpense() {

    let expenseArray = JSON.parse(localStorage.getItem('storedExpenses')) || [];

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

    //
    // START Mike's new code 9-26

    // declares a variable named 'expenseTable' and assigns the value to the first element with the #expense-table class.
    const expenseTable = document.querySelector('#expense-table');

    // clears any existing content inside the expenseTable element by setting its innerHTML property to an empty string - ensures that the table is empty before any new content is added.
    expenseTable.innerHTML = '';

    // this starts a for each loop that iterates over each expense item in the array. the forEach method executes the provided function one time for every element in the array.
    expenseArray.forEach(expense => {

        // creates a string of HTML for the current expense and assigns the result back to the variable expenseHTML.
        const expenseHTML = `
        <div class="expense-table-item">
            <p>Category: ${expense.category}</p>
            <p>Amount: $${expense.amount}</p>
            <p>Date: ${expense.date}</p>
        </div>
        `;

        // injects the HTML created above into the element named expenseTable that we declared at the top of the section. beforeend adds the HTML to the end of the existing table.
        expenseTable.insertAdjacentHTML('beforeend', expenseHTML);
    });

    // END Mike's New Code 9-26
    // 

    console.log('New expense added! Here are the details: ', expenseObject);
}


/* EVENT LISTENERS */

function initialize() {

    expenseButton.addEventListener('click', addExpense);
    expenseForm.addEventListener('submit', addExpense);
    $('#date-input').datepicker();

}

initialize();


