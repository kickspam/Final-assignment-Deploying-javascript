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
// Add event listeners to day buttons
for (let i = 0; i < dayButtons.length; i++) {
    dayButtons[i].addEventListener('click', function() {
        if (!this.classList.contains('clicked')) {
            this.classList.add('clicked');
            selectedDays++;
            recalculateCost();
        }
    });
}

/********* clear days *********/
// Add event listener to clear button
clearButton.addEventListener('click', function() {
    for (let i = 0; i < dayButtons.length; i++) {
        dayButtons[i].classList.remove('clicked');
    }
    selectedDays = 0;
    totalCost = 0;
    updateCostDisplay();
});

/********* change rate *********/
// Add event listeners to rate buttons
halfDayButton.addEventListener('click', function() {
    dailyRate = 20;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    recalculateCost();
});

fullDayButton.addEventListener('click', function() {
    dailyRate = 35;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    recalculateCost();
});

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
