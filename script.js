//----define moment varibles used to show time----//
var date = moment().format("MMM Do YY");
// var currentTime = moment().format('H');
// console.log(currentTime);
//-------append date----------//
$("#currentDay").append(date);
//---------background Updater------------------------//
var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
updatetime();
function updatetime() {
  var currentTime = moment().format('H');
for(var i = 0; i < timeOfday.length; i++) {

    if (parseInt(timeOfday[i]) > currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: light blue");
console.log("testing123")

    }
    else if (parseInt(timeOfday[i]) < currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: lightgray");

    }
    else if (parseInt(timeOfday[i]) == currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: orange");

    }
  }

//--onclick event to save user input to local storage---//
$(".saveBtn").on("click", function() {
    var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});

//-------Getting individual childern and setting to parent-----//
  $("#9am").children("input").val(localStorage.getItem("9am"));}