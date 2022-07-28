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

    // hard code the 9-5 time blocks
    // so each row is unique and button is unique
    // add 3 bootstrap sections, adjust size of the columns 

// current time varibale 
var currentDayEl = $('#currentDay');

// button variables
var inputBtn1 = $('#saveBtn1');
var inputBtn2 = $('#saveBtn2');
var inputBtn3 = $('#saveBtn3');
var inputBtn4 = $('#saveBtn4');
var inputBtn5 = $('#saveBtn5');
var inputBtn6 = $('#saveBtn6');
var inputBtn7 = $('#saveBtn7');
var inputBtn8 = $('#saveBtn8');
var inputBtn9 = $('#saveBtn9');

// textarea variables
var workListEl1 = $('#hour-9');
var workListEl2 = $('#hour-10');
var workListEl3 = $('#hour-11');
var workListEl4 = $('#hour-12');
var workListEl5 = $('#hour-1');
var workListEl6 = $('#hour-2');
var workListEl7 = $('#hour-3');
var workListEl8 = $('#hour-4');
var workListEl9 = $('#hour-5');

// each row variable
var hour9 = $('#rowOne');
var hour10 = $('#rowTwo');
var hour11 = $('#rowThree');
var hour12 = $('#rowFour');
var hour13 = $('#rowFive');
var hour14 = $('#rowSix');
var hour15 = $('#rowSeven');
var hour16 = $('#rowEight');
var hour17 = $('#rowNine');

// assigning each row a number that represents the time in miltary time
hour9 = 9;
hour10 = 10;
hour11 = 11;
hour12 = 12;
hour13 = 13;
hour14 = 14;
hour15 = 15;
hour16 = 16;
hour17 = 17;

// variable that calculates the time now in hours
var hour = moment().format('H');

console.log(hour);

// displaying the current date and day of the week
function displayTime() {
    var rightNow = moment().format('dddd MMMM Do');
    currentDayEl.text(rightNow);

}
displayTime();

// next 9 functions are what makes the column change color with time
// im sure theres an easier/cleaner way to loop this but its working as i want.
function past9(){
    if (hour9 < hour) {
        workListEl1.attr("style", 'background-color: lightgrey');
    }
    if (hour9 == hour) {
        workListEl1.attr("style", 'background-color:  #ff6961');
    }
    if (hour9 > hour) {
        workListEl1.attr("style", 'background-color: lightgreen');
    }
    
}
past9();

function past10(){
    if (hour10 < hour) {
        workListEl2.attr("style", 'background-color: lightgrey');
    }
    if (hour10 == hour) {
        workListEl2.attr("style", 'background-color:  #ff6961');
    }
    if (hour10 > hour) {
        workListEl2.attr("style", 'background-color: lightgreen');
    }
    
}
past10();

function past11(){
    if (hour11 < hour) {
        workListEl3.attr("style", 'background-color: lightgrey');
    }
    if (hour11 == hour) {
        workListEl3.attr("style", 'background-color:  #ff6961');
    }
    if (hour11 > hour) {
        workListEl3.attr("style", 'background-color: lightgreen');
    }
    
}
past11();

function past12(){
    if (hour12 < hour) {
        workListEl4.attr("style", 'background-color: lightgrey');
    }
    if (hour12 == hour) {
        workListEl4.attr("style", 'background-color:  #ff6961');
    }
    if (hour12 > hour) {
        workListEl4.attr("style", 'background-color: lightgreen');
    }
    
}
past12();

function past13(){
    if (hour13 < hour) {
        workListEl5.attr("style", 'background-color: lightgrey');
    }
    if (hour13 == hour) {
        workListEl5.attr("style", 'background-color:  #ff6961');
    }
    if (hour13 > hour) {
        workListEl5.attr("style", 'background-color: lightgreen');
    }
    
}
past13();

function past14(){
    if (hour14 < hour) {
        workListEl6.attr("style", 'background-color: lightgrey');
    }
    if (hour14 == hour) {
        workListEl6.attr("style", 'background-color:  #ff6961');
    }
    if (hour14 > hour) {
        workListEl6.attr("style", 'background-color: lightgreen');
    }
    
}
past14();

function past15(){
    if (hour15 < hour) {
        workListEl7.attr("style", 'background-color: lightgrey');
    }
    if (hour15 == hour) {
        workListEl7.attr("style", 'background-color:  #ff6961');
    }
    if (hour15 > hour) {
        workListEl7.attr("style", 'background-color: lightgreen');
    }
    
}
past15();

function past16(){
    if (hour16 < hour) {
        workListEl8.attr("style", 'background-color: lightgrey');
    }
    if (hour16 == hour) {
        workListEl8.attr("style", 'background-color: #ff6961');
    }
    if (hour16 > hour) {
        workListEl8.attr("style", 'background-color: lightgreen');
    } 
}
past16();

function past17(){
    if (hour17 < hour) {
        workListEl9.attr("style", 'background-color: lightgrey');
    }
    if (hour17 == hour) {
        workListEl9.attr("style", 'background-color:  #ff6961');
    }
    if (hour17 > hour) {
        workListEl9.attr("style", 'background-color: lightgreen');
    }
}
past17();




// // function to saving the inputs to local storage
// function saveInput(){
//     inputBtn1.addEventListener('click', function(){
//         if(workListEl1 = "hi");
//         window.alert("hi)");
    
//         localStorage.setItem('hour-9', workListEl1 )
//     });
// }
//     localStorage.setItem('<textarea>', workListEl1);
// }

// console.log(saveInput)