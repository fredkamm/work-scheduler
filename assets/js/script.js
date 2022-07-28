// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    // css already had those values stores 
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// hard cope the 9-5 time blocks
// so each row is unique and button is unique
// add 3 bootstrap sections, adjust size of the columns 

// assign variables
var currentDayEl = $('#currentDay');

var inputBtn1 = $('#saveBtn1');
var inputBtn2 = $('#saveBtn2');
var inputBtn3 = $('#saveBtn3');
var inputBtn4 = $('#saveBtn4');
var inputBtn5 = $('#saveBtn5');
var inputBtn6 = $('#saveBtn6');
var inputBtn7 = $('#saveBtn7');
var inputBtn8 = $('#saveBtn8');
var inputBtn9 = $('#saveBtn9');

var workListEl1 = $('#workList1');
var workListEl2 = $('#workList2');
var workListEl3 = $('#workList3');
var workListEl4 = $('#workList4');
var workListEl5 = $('#workList5');
var workListEl6 = $('#workList6');
var workListEl7 = $('#workList7');
var workListEl8 = $('#workList8');
var workListEl9 = $('#workList9');

var allWorkList = [workListEl1, workListEl2, workListEl3, workListEl4, workListEl5, workListEl6, workListEl7, workListEl8, workListEl9]; 



// console.log(allWorkList);

// displaying the current date and day of the week
function displayTime() {
    var rightNow = moment().format('dddd MMMM Do');
    currentDayEl.text(rightNow);

}
displayTime();

// function to saving the inputs to local storage
function saveInput(){
    localStorage.setItem('<textarea>', workListEl1);
}

console.log(saveInput);


function saveBtnOne (){
    inputBtn1.addEventListener('click', saveInput);
}


// for (var i = 0; i < allWorkList.length; i++) {
//     var input = allWorkList[i].value;
//     localStorage.setItem(allWorkList[i])