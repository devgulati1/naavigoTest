let countDays=document.querySelector(".days")
let countHours=document.querySelector(".hours")
let countMinutes=document.querySelector(".minutes")
let countSeconds=document.querySelector(".seconds")

const countDown=()=>{
    const finalDay=new Date("June 25,2022 00:00:00").getTime();
    console.log(finalDay)
    const now=new Date().getTime();
    const gap=finalDay-now;
    console.log(gap)

    const seconds=1000;
    const minute=seconds*60;
    const hour=minute*60;
    const day=hour*24

    // calculate
    const textDay=Math.floor(gap/day)
    
    console.log(textDay)
    const textHour=Math.floor((gap%day)/hour)
    const textMinute=Math.floor((gap%hour)/minute);
    const textSecond=Math.floor((gap%minute)/seconds)


    countDays.innerHTML=textDay;
    countHours.innerHTML=textHour;
    countMinutes.innerHTML=textMinute;
    countSeconds.innerHTML=textSecond;
}
setInterval(countDown,1000);