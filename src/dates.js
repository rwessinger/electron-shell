var date1 = new Date("09/01/2020");
var date2 = new Date("09/15/2020");

// To calculate the time difference of two dates
var Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

//To display the final no. of days (result)
console.log(Difference_In_Days);
