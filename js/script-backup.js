
const expenseForm = document.querySelector('#expense-form');
const limitForm = document.querySelector('#limit-form');

function getExpenses() {
    return JSON.parse(localStorage.getItem('storedExpenses')) || [];
}

function getLimitAmount() {
    let storedValue = localStorage.getItem('storedLimitAmount');
    return storedValue !== null ? Number(JSON.parse(storedValue)) : 0;
}

function addExpense(event) {
    event.preventDefault(); // Prevent form submission

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

function addLimitAmount(event) {
    event.preventDefault(); // Prevent form submission

    let limitAmount = getLimitAmount();
    console.log('Current limit amount:', limitAmount);

    const limitInput = Number(document.querySelector('#limit-input').value);
    console.log('Input value:', limitInput);

    if (isNaN(limitInput)) {
        console.error('Invalid input value:', limitInput);
        return;
    }

    limitAmount = limitInput;
    console.log('Updated limit amount:', limitAmount);

    localStorage.setItem('storedLimitAmount', JSON.stringify(limitAmount));
    console.log('Stored limit amount:', localStorage.getItem('storedLimitAmount'));

    showLimitAmount();

    console.log('This is the limit amount you set:', limitAmount);
}

function showLimitAmount() {
    let storedLimitAmount = getLimitAmount();
    let displayedLimit = document.querySelector('#limit-display');

    displayedLimit.innerHTML = '';

    let displayedLimitHTML = `
    <div class="limit-display">
        <h3>${storedLimitAmount}</h3>
    </div> 
    `;
    displayedLimit.insertAdjacentHTML('beforeend', displayedLimitHTML);
}

function showTable() {
    let storedExpenses = getExpenses();
    const expenseTable = document.querySelector('#expense-table');
    expenseTable.innerHTML = '';

    storedExpenses.forEach(function(expense) {
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
    expenseForm.addEventListener('submit', addExpense);
    limitForm.addEventListener('submit', addLimitAmount);
    $('#date-input').datepicker();
    showTable();
    showLimitAmount();
}

initialize();