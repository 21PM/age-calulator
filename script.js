var calculateId = document.getElementsByClassName("calcute")[0];
var inputDate = document.getElementById("input-cal");
var yearDiv = document.getElementsByClassName("Year")[0];
var countId =  document.getElementsByTagName("p")[0];
var countId1 =  document.getElementsByTagName("p")[1];
var countId2 =  document.getElementsByTagName("p")[2];

var alpha = ["1" ,"2" , "3", "3" , "5"]
var index = 0;  

calculateId.addEventListener('click',function(){

//************ DIFFERENCE OF DAYS *************
    

     // Get the current date


    var curDay = new Date();
    // console.log(curDay);

     // Get the selected date from the input value
     var selectedDay = new Date(inputDate.value);

    // Calculate the difference in milliseconds
    var timeDifference = curDay.getTime() - selectedDay.getTime();


    // Convert the difference to days

    var dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    // console.log(dayDifference);

    if(dayDifference > 0){
        countId2.innerText = dayDifference;
    }


//*********** DIFFERENCE OF MONTHS  ************


    // Get the current date

    var curMonth = new Date();
    // console.log(curMonth);

    //Get the current date from the input calendar.
    var inputMonth = new Date(inputDate.value);
    // console.log(inputMonth);
   

    // var monthDiff = inputMonth - curMonth;
    // console.log(monthDiff);

    //Final Month Difference month
    var monthDifference = (curMonth.getFullYear() - inputMonth.getFullYear()) * 12 + curMonth.getMonth() - inputMonth.getMonth();

    // console.log("Month Difference:", monthDifference);

    if(monthDifference > 0 && monthDifference <= 12){
        countId1.innerText = monthDifference;
    }

//************ DIFFERENCE OF YEARS *************

     // Get the current year
     var curYear =  new Date().getFullYear();

     // Get the selected date from the input value
     var inputCurrentYear = inputDate.value;
     // console.log(inputCurrentDate);
 
     // Extract the year from the selected date
     var inputSelectedYear = new Date(inputCurrentYear).getFullYear();
     // console.log(inputSelectedYear);
 
     //extract the difference of current year and input year in diff variable
     var yearDiff = curYear - inputSelectedYear;
     // console.log(yearDiff);
 
 
     if(yearDiff > 0 && dayDifference > 365)
         countId.innerText = yearDiff;
 
})


