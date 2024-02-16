function isLeap(year) {   
    var leapYear;
    
    if(year%4 === 0 && year%100 !== 0 || year%400 === 0){
        leapYear = "Leap year.";
    }else{
        leapYear = "Not leap year.";
    }

    return leapYear;
}
