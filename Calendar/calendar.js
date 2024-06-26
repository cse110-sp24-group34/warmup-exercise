var datecounter = new Date();
datecounter.setDate(1);

//Create Hash Table
var map = new Map();

//Populate the calendar with the current month
window.onload = function() {
    setCalendar(datecounter);
};


var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysPerMonth = [31,28,31,30,31,30,31,31,30,31,30,31]
    
function setCalendar(d){
    
    var row = 0;
    for(row; row < 6; row = row + 1){
        let Cell = document.getElementById("datetable").rows[row].cells;
        var col = 0;
        while(col < 7){
            Cell[col].innerHTML = "";
            Cell[col].classList.remove("prevMonth");
            col = col + 1;
        }
   }

    
    // Get the day of the week
    var dayNumber = d.getDay()
    var row = 0;
    var date = 1;
    var month = d.getMonth();
    var year = d.getFullYear();

    var prevMonth = month === 0 ? 11 : month - 1;
    var prevMonthDays = daysPerMonth[prevMonth];
    var prevMonthStartDay = prevMonthDays - (dayNumber - 1);

    for (let i = 0; i < dayNumber; i++) {
        let prevMonthDay = prevMonthStartDay + i;
        document.getElementById("datetable").rows[0].cells[i].innerHTML = "<button class='prevdayButton'>" + prevMonthDay + "</button>";
        document.getElementById("datetable").rows[0].cells[i].classList.add("prevMonth");
    }

    for(row; row < 6; row = row + 1){
        let Cell = document.getElementById("datetable").rows[row].cells;
        while(dayNumber < 7 && ((month==1 && year%4==0) ? date <= 29 : date <= daysPerMonth[month])){
            Cell[dayNumber].innerHTML = "<button class='dayButton' id=" + date + " onClick = 'TextBox(datecounter,this.id)' >" + date + "</button>";
            date = date + 1;
            dayNumber = dayNumber + 1;
        }
        dayNumber = 0;
    }

    let monthElement = document.getElementById("month");
    monthElement.innerHTML = monthsOfYear[month];
    let yearElement = document.getElementById("year");
    yearElement.innerHTML = year;

}
    
function incrementMonth(d){
    if(d.getMonth == 11){
        d.setFullYear(d.getFullYear() + 1, 0);
    }
    else{
        d.setMonth(d.getMonth() + 1);
    }
    setCalendar(d);
}

function decrementMonth(d){
    if(d.getMonth == 0){
        d.setFullYear(d.getFullYear() - 1, 11);
    }
    else{
        d.setMonth(d.getMonth() - 1);
    }
    setCalendar(d);
}

function TextBox(d, date) {
    var textBox = prompt("Log Entry: ", map.get((d.getFullYear() + d.getMonth() + date)));
    map.set((d.getFullYear() + d.getMonth() + date),textBox);
}



