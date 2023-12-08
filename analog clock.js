const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes")
const second = document.querySelector(".seconds")

// rotation is add in the css file  as the var

function runClock(){ 
    const time = new Date();
    const sec =time.getSeconds()/60;
    const min =(sec +time.getMinutes())/60;
    const hrs = (min +time.getHours())/12;
    hour.style.setProperty('--rotation',hrs*360) 
    minute.style.setProperty('--rotation',min*360)
    second.style.setProperty('--rotation',sec*360)
    console.log(time)
    
}
runClock()
setInterval(runClock,1000)
