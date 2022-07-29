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
var workListEl1 = $('textarea[name="hour-9"]');
var workListEl2 = $('textarea[name="hour-10"]');
var workListEl3 = $('textarea[name="hour-11"]');
var workListEl4 = $('textarea[name="hour-12"]');
var workListEl5 = $('textarea[name="hour-1"]');
var workListEl6 = $('textarea[name="hour-2"]');
var workListEl7 = $('textarea[name="hour-3"]');
var workListEl8 = $('textarea[name="hour-4"]');
var workListEl9 = $('textarea[name="hour-5"]');

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
// im sure theres an easier/cleaner way to loop this but its working so ill take it
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

// the multiple lines of functions below save the textarea input to local storage
// again theres got to be a better way to do this but im happy that its just working right now
function saveInput1(){

    localStorage.setItem('hour-9', JSON.stringify(workListEl1.val()));
}

inputBtn1.on('click', saveInput1);

function saveInput2(){

    localStorage.setItem('hour-10', JSON.stringify(workListEl2.val()));
}
inputBtn1.on('click', saveInput2);

function saveInput3(){

    localStorage.setItem('hour-11', JSON.stringify(workListEl3.val()));
}
inputBtn1.on('click', saveInput3);

function saveInput4(){

    localStorage.setItem('hour-12', JSON.stringify(workListEl4.val()));
}
inputBtn1.on('click', saveInput4);

function saveInput5(){

    localStorage.setItem('hour-1', JSON.stringify(workListEl5.val()));
}
inputBtn1.on('click', saveInput5);

function saveInput6(){

    localStorage.setItem('hour-2', JSON.stringify(workListEl6.val()));
}
inputBtn1.on('click', saveInput6);

function saveInput7(){

    localStorage.setItem('hour-3', JSON.stringify(workListEl7.val()));
}
inputBtn1.on('click', saveInput7);

function saveInput8(){

    localStorage.setItem('hour-4', JSON.stringify(workListEl8.val()));
}
inputBtn1.on('click', saveInput8);

function saveInput9(){

    localStorage.setItem('hour-5', JSON.stringify(workListEl9.val()));
}
inputBtn1.on('click', saveInput9);
    
// saving the text to the page after reload
// however the strings are included, im sure its a small fix that im not sure about.
// im not sure why but hour-5 is not saving to the page but saves to local storage?
var hour9Block = localStorage.getItem("hour-9");
    if (hour9Block){
        workListEl1.val(hour9Block);
    };

var hour10Block = localStorage.getItem("hour-10");
    if (hour10Block){
        workListEl2.val(hour10Block);
    };
    
var hour11Block = localStorage.getItem("hour-11");
    if (hour11Block){
        workListEl3.val(hour11Block);
    };

var hour12Block = localStorage.getItem("hour-12");
    if (hour12Block){
        workListEl4.val(hour12Block);
    };

var hour1Block = localStorage.getItem("hour-1");
    if (hour1Block){
        workListEl5.val(hour1Block);
    };

var hour2Block = localStorage.getItem("hour-2");
    if (hour2Block){
        workListEl6.val(hour2Block);
    };

var hour3Block = localStorage.getItem("hour-3");
    if (hour3Block){
        workListEl7.val(hour3Block);
    };

var hour4Block = localStorage.getItem("hour-4");
    if (hour4Block){
        workListEl7.val(hour4Block);
    };

var hour5Block = localStorage.getItem("hour-5");
    if (hour5Block){
        workListEl8.val(hour5Block);
    };






    

