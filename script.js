//Global Variables
var saveButton = $(".savebtn");
var currHour = moment().format("HH");
var currHourParInt = parseInt(currHour);

//Setting Data attributs to hour inputs (for color based on  current time function)
$("#9amRow").attr(("data-time", moment("9:00 am", "h:mm a").format("HH")));
$("#10amRow").attr(("data-time", moment("10:00 am", "h:mm a").format("HH")));
$("#11amRow").attr(("data-time", moment("11:00 am", "h:mm a").format("HH")));
$("#12pmRow").attr(("data-time", moment("12:00 pm", "h:mm a").format("HH")));
$("#1pmRow").attr(("data-time", moment("1:00 pm", "h:mm a").format("HH")));
$("#2pmRow").attr(("data-time", moment("2:00 pm", "h:mm a").format("HH")));
$("#3pmRow").attr(("data-time", moment("3:00 pm", "h:mm a").format("HH")));
$("#4pmRow").attr(("data-time", moment("4:00 pm", "h:mm a").format("HH")));
$("#5pmRow").attr(("data-time", moment("5:00 pm", "h:mm a").format("HH")));
$("#6pmRow").attr(("data-time", moment("6:00 pm", "h:mm a").format("HH")));

//Start jQuery
$(document).ready(function () {

  //Display Current Date and Time on page
  
  $("currentDay").append();

  function addCurrDate() {
    $("#currentDay").html(moment().format("MMMM do YYYY, h:mm a"));
  }
  setInterval(addCurrDate, 1000);

  
  
    
  }
});
