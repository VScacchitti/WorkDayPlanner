//Global Variables
var saveButton = $(".savebtn");
var currHour;
var currHourParInt;

//Setting Data attributs to hour inputs (for color based on time function)
$("#9amRow").attr(("data-time", moment("9:00 am", "h:mm a").format("HH")));

//Start jQuery
$(document).ready(function () {});
