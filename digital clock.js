let clock = document.querySelector(".clock");
function digitalClock(){
    let time = new Date();
    let hours = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    
    let txt ="AM"
    if(hours >12){
        hours = hours -12;
        txt ="PM"
    } else if(hours == 0){
        hours = 12;
        txt ="AM"
    }
    
    hours = hours <10? "0"+hours:hours;
    min = min<10 ? "0"+min :min;
    sec = sec <10 ?"0"+sec :sec;
    console.log(time)
    console.log(hours)
    console.log(min)
    console.log(sec)
    console.log(txt)
    clock.innerHTML=(`${hours} : ${min} : ${sec} ${txt}`)
}
digitalClock()
setInterval(digitalClock,1000)