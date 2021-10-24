var scheduleArea = $(".schedule");
// var timeRow = $(".timeRow");
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
        } else if ((timeNum) > currentHour) {
            $("textarea[id=" + timeRow[i] + "]").addClass("future");
        } else {
            $("textarea[id=" + timeRow[i] + "]").addClass("past");
        }
    }
}
