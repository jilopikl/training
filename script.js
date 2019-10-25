var money = prompt('Your budget per month?');
var time = prompt('Enter date YYYY-MM-DD');

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var question1 = prompt('What do you buy each month?');
var question2 = +prompt('How much does it cost per month?');
var question3 = prompt('What do you buy each month?');
var question4 = +prompt('How much does it cost per month?');

appData.expenses.question1 = question2;
appData.expenses.question3 = question4;

alert(appData.budget/30);