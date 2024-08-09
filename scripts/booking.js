/********* create variables *********/
// Initialize variables
let dailyRate = 35; // Default rate
let selectedDays = 0; // Number of days selected
const dayButtons = document.querySelectorAll('.day-selector li'); // Day buttons
const clearButton = document.getElementById('clear-button'); // Clear button
const halfDayButton = document.getElementById('half'); // Half-day button
const fullDayButton = document.getElementById('full'); // Full-day button
const calculatedCostElement = document.getElementById('calculated-cost'); // Element to display cost

// Initialize total cost
let totalCost = 0;

/********* color change days of week *********/
// Define a function to handle day button clicks
function handleDayClick() {
    if (!this.classList.contains('clicked')) {
        this.classList.add('clicked');
        selectedDays++;
        recalculateCost();
    }
}

// Add event listeners to day buttons
dayButtons.forEach(function(button) {
    button.addEventListener('click', handleDayClick);
});

/********* clear days *********/
// Define a function to handle clear button click
function handleClearClick() {
    dayButtons.forEach(function(button) {
        button.classList.remove('clicked');
    });
    selectedDays = 0;
    totalCost = 0;
    updateCostDisplay();
}

// Add event listener to clear button
clearButton.addEventListener('click', handleClearClick);

/********* change rate *********/
// Define a function to handle half-day button click
function handleHalfDayClick() {
    dailyRate = 20;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    recalculateCost();
}

// Define a function to handle full-day button click
function handleFullDayClick() {
    dailyRate = 35;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    recalculateCost();
}

// Add event listeners to rate buttons
halfDayButton.addEventListener('click', handleHalfDayClick);
fullDayButton.addEventListener('click', handleFullDayClick);

/********* calculate *********/
// Function to recalculate and display the cost
function recalculateCost() {
    totalCost = selectedDays * dailyRate;
    updateCostDisplay();
}

// Function to update the cost display
function updateCostDisplay() {
    calculatedCostElement.innerHTML = totalCost;
}
