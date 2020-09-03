//Global Variables
var saveButton = $(".savebtn");
var currHour = moment().format("HH");
var currHourParInt = parseInt(currHour);

//Setting Data attributs to hour inputs (for color based on  current time function)
$("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

//Clear Local Storage (used once to stop returning undefined in certian rows)
/*deleteItems();

function deleteItems() {
  localStorage.clear();
}*/

//Start jQuery
$(document).ready(function () {
  // Calling the local Storage function to load when page is loaded or refreshed
  getStoredTask();

  //Display Current Date and Time on page
  $("currentDay").append();

  function addCurrDate() {
    $("#currentDay").html(moment().format("MMMM Do YYYY, h:mm a"));
  }
  setInterval(addCurrDate, 1000);

  //Changing color of Timblock based on current hour of the day
  for (var i = 0; i <= 12; i++) {
    //Variable for the row hour
    var rowHour = $("#" + i + "Row").attr("data-time");
    var rowHourInt = parseInt(rowHour);

    if (currHourParInt === rowHourInt) {
      $("#" + i + "Row").addClass("present");
      console.log(currHourParInt);
      console.log(rowHourInt);
    }

    if (currHourParInt > rowHourInt) {
      $("#" + i + "Row").addClass("past");
    }

    if (currHourParInt < rowHourInt) {
      $("#" + i + "Row").addClass("future");
    }
  }

  // Local Storage

  //stores our input on click
  saveButton.on("click", function () {
    var rowHourLS = $(this).attr("data-hour");
    var input = $("#" + rowHourLS + "Row").val();
    localStorage.setItem(rowHourLS, input);
  });

  //Function to retreve stored info
  function getStoredTask() {
    for (var i = 0; i <= 12; i++) {
      $("#" + i + "Row").val(localStorage.getItem(i));
    }
  }
});
