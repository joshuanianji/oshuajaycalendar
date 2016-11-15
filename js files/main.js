$(document).ready(function () {
    var mainDatabase = {
        gregorianYear: new Date().getFullYear(),
        //checks if the year is a leap year
        isLeapYear : mainDatabase.gregorianYear % 400 == 0 || (mainDatabase.gregorianYear % 4 == 0 && !mainDatabase.gregorianYear % 100 == 0)
    }

})