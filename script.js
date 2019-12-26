// constant var is used , queryselector is used to refer to object using id
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//function is created so that we can refer it after every second ie 1000 mili second
function runTheClock(){
    //Date var is created to refer to hours minutes and seconds     
    var date = new Date();
    console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    //Just to print the Hours , minutes and Second on console for cross reference
    console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);
    
    //Var just to get an accurate tick of the clock hands so that it doesnt stay at constant value
    
    //hour hand should move along with the minutes
    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    
    //minute hand should move along with seconds
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    
    //sec is as usual
    let secPosition = sec*360/60;

    //inline css is done on the HTML along with the help of rotate method we get the 360deg rotate reference
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}
//setInterval Method is called to see the tick movement after every 1000miliseconds
var interval = setInterval(runTheClock,1000);
