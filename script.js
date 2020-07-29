$(document).ready(function() {
  
  

  $(".saveBtn").on("click", function() {
    event.preventDefault();
   
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    console.log('value:', value);
    console.log('time:', time);

    localStorage.setItem(time, value);
  });

  function hourUpdater() {
  
    var currentHour = moment().hours();
    console.log('current hour:', currentHour);

    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      console.log("block hour:", blockHour);

      if (currentHour > blockHour) {
        $(this).addClass("past");
      } else if (currentHour === blockHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();

  var checkTime = setInterval(hourUpdater(), 15000);

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  $("#currentDay").css("text-decoration", "underline");
});