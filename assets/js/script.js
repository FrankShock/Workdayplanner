var schArea = $(".schedule");
var timeSec = [];
var currDate = moment().format("MMM Do YYYY");
var currHour = parseInt(moment().format("H"));
var toDos = [];

$("#currentDay").text(currDate);

setRows();

function setRows() {

    $("textarea").each(function () {
        var thisRow = $(this).attr("id");
        timeSec.push(thisRow);
    });

    for (var i = 0; i < timeSec.length; i++) {
        var timeNum = parseInt(timeSec[i])

        if ((timeNum) === currHour) {
            $("textarea[id=" + timeSec[i] + "]").addClass("present");

        }
         else if ((timeNum) > currHour) {
            $("textarea[id=" + timeSec[i] + "]").addClass("future");
        } 
        else {
            $("textarea[id=" + timeSec[i] + "]").addClass("past");
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

var timenum9 = localStorage.getItem("9");
$("#9").text(timenum9);

var timenum10 = localStorage.getItem("10");
$("#10").text(timenum10);

var timenum11 = localStorage.getItem("11");
$("#11").text(timenum11);

var timenum12 = localStorage.getItem("12");
$("#12").text(timenum12);

var timenum13 = localStorage.getItem("13");
$("#13").text(timenum13);

var timenum14 = localStorage.getItem("14");
$("#14").text(timenum14);

var timenum15 = localStorage.getItem("15");
$("#15").text(timenum15);

var timenum16 = localStorage.getItem("16");
$("#16").text(timenum16);

var timenum17 = localStorage.getItem("17");
$("#17").text(timenum17);