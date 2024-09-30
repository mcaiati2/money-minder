const expenseForm = document.querySelector('#expense-form');
const expenseButton = document.querySelector('#expense-button');
const dropdownBtn = document.querySelector('#dropdown-button');

const limitForm = document.querySelector('#limit-form');
const limitButton = document.querySelector('#limit-button');
const totalDisplay = document.querySelector('#total-display');

// returns stored expenses list
function getExpenses() {
    return JSON.parse(localStorage.getItem('storedExpenses')) || [];
}

// returns stored limit amount
function getLimitAmount() {
    return JSON.parse(localStorage.getItem('storedLimitAmount')) || 0;
}

// returns total amount of stored expenses
function getTotalExpenseAmount() {
    return JSON.parse(localStorage.getItem('storedTotalExpenses')) || 0;
}

// adds a new expense and displays the updated table and updated expense amount
function addExpense() {
    let expenseArray = getExpenses();

    const categoryInput = document.querySelector('#category-input').value;
    const amountInput = parseFloat(document.querySelector('#amount-input').value);
    const dateInput = document.querySelector('#date-input').value;

    const expenseObject = {
        category: categoryInput,
        amount: `$${amountInput}`,
        date: dateInput,
    };

    expenseArray.push(expenseObject);

    localStorage.setItem('storedExpenses', JSON.stringify(expenseArray));
    showTable();
    showTotalExpenses();

    console.log('New expense added! Here are the details: ', expenseObject);

}

// adds a new limit and shows the limit amount
function addLimitAmount() {
    let limitAmount = getLimitAmount();

    const limitInput = Number(document.querySelector('#limit-input').value);

    limitAmount = limitInput;

    localStorage.setItem('storedLimitAmount', JSON.stringify(limitAmount));
    showLimitAmount();

    console.log('New limit set! Here is the amount: ', limitAmount);

}

// calculates total of logged expenses
function calculateTotalExpenses() {
    let expenseArray = getExpenses();

    //  converts expense amounts into numbers
    let total = expenseArray.reduce(function (sum, expense) {
        return sum + parseFloat(expense.amount.replace('$', ''));
    }, 0);

    localStorage.setItem('storedTotalExpenses', JSON.stringify(total));

    console.log('New expense total for the month. Here is the new total: ', total);

    return total;
    
}

function showTotalExpenses() {
    let storedTotalExpenses = calculateTotalExpenses();

    let displayedTotal = document.querySelector('#total-display');

    displayedTotal.innerHTML = '';

    let displayedTotalHTML = `
    <h3 class="total-display" style="color: #009900">Current Monthly Expenses:
    $${storedTotalExpenses}</h3>
    `;
    displayedTotal.insertAdjacentHTML('beforeend', displayedTotalHTML);

}

function showLimitAmount() {
    let storedLimitAmount = getLimitAmount();

    let displayedLimit = document.querySelector('#limit-display');

    displayedLimit.innerHTML = '';

    let displayedLimitHTML = `
    <h3 class="limit-display" style="color: #006e00">My Monthly Limit: 
        $${storedLimitAmount}</h3>
    `;

    displayedLimit.insertAdjacentHTML(
        'beforeend', displayedLimitHTML);

}

function showTable() {
    let storedExpenses = getExpenses();
    const expenseTable = document.querySelector('#expense-table');

    expenseTable.innerHTML = '';

    storedExpenses.forEach(function (expense) {
        const newTableRow = document.createElement("tr");

        const amountCell = document.createElement("td");
        amountCell.textContent = expense.amount;
        newTableRow.append(amountCell);


        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;
        newTableRow.append(categoryCell);

        const dateCell = document.createElement("td");
        dateCell.textContent = expense.date;
        newTableRow.append(dateCell);

        expenseTable.append(newTableRow);
    });

    console.log('These are the current stored expenses:', storedExpenses);

}

/* EVENT LISTENERS */

function initialize() {
    dropdownBtn.addEventListener('click', function () {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        dropdownMenu.classList.toggle('show');
    });

    expenseForm.addEventListener('submit', addExpense);
    expenseButton.addEventListener('click', addExpense);

    limitForm.addEventListener('submit', addLimitAmount);
    limitButton.addEventListener('click', addLimitAmount);

    $('#date-input').datepicker();

    showTable();
    showTotalExpenses();
    showLimitAmount();
}

initialize();