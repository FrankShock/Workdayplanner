var scheduleArea = $(".schedule");
var timeRow = [];
var currentDate = moment().format("MMM Do YYYY");
var currentHour = parseInt(moment().format("H"));
var toDos = [];

$("#currentDay").text(currentDate);

setRows();

function setRows() {

    $("textarea").each(function () {
        var thisRow = $(this).attr("id");
        timeRow.push(thisRow);
    });

    for (var i = 0; i < timeRow.length; i++) {
        var timeNum = parseInt(timeRow[i])

        if ((timeNum) === currentHour) {
            $("textarea[id=" + timeRow[i] + "]").addClass("present");

        }
         else if ((timeNum) > currentHour) {
            $("textarea[id=" + timeRow[i] + "]").addClass("future");
        } 
        else {
            $("textarea[id=" + timeRow[i] + "]").addClass("past");
        }
    }
}

$(".saveBtn").on("click", function (event) {
    var thisRow = $(this);
    var thisRowHr = (thisRow.prev().attr("id"));

         
        var hour=thisRowHr;
    var text=thisRow.prev().val();

localStorage.setItem(hour, text);
});

var hourKey9 = localStorage.getItem("9");
$("#9").text(hourKey9);

var hourKey10 = localStorage.getItem("10");
$("#10").text(hourKey10);

var hourKey11 = localStorage.getItem("11");
$("#11").text(hourKey11);

var hourKey12 = localStorage.getItem("12");
$("#12").text(hourKey12);

var hourKey13 = localStorage.getItem("13");
$("#13").text(hourKey13);

var hourKey14 = localStorage.getItem("14");
$("#14").text(hourKey14);

var hourKey15 = localStorage.getItem("15");
$("#15").text(hourKey15);

var hourKey16 = localStorage.getItem("16");
$("#16").text(hourKey16);

var hourKey17 = localStorage.getItem("17");
$("#17").text(hourKey17);