const days =document.querySelector("#days")
const hours =document.querySelector("#hours")
const minutes =document.querySelector("#minutes")
const seconds =document.querySelector("#seconds")



// console.log(new Date());
// const currentYear = new Date().getFullYear()
// console.log(currentYear+1)
// const newYear = new Date(`January 1 ${currentYear+1} 00:00:00`);
// console.log(newYear);
// const currentDate =new Date();
// console.log(currentDate);
// const diff = newYear-currentDate
// const  d = Math.floor(diff/1000/60/60/24);
// console.log(d);
// const h =Math.floor((diff/1000/60/60)%24);
// console.log(h);
// const m =Math.floor((diff/1000/60)%60);
// console.log(m);
// const s =Math.floor((diff/1000)%60);
// console.log(s);
/*
1000ms = 1s
60s = 1min
60min = 1 hr
24hr = 1 day
*/
function uploadTime(){
    const currentYear = new Date().getFullYear();
    const newYear =new Date(`January 1 ${currentYear+1} 00:00:00`);
    const currentDate = new Date();
    const diff = newYear-currentDate;
    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor((diff/1000/60/60)%24);
    const m = Math.floor((diff/1000/60)%60);
    const s = Math.floor((diff/1000)%60);
    // console.log(d+" "+ h+" "+m+" "+s)
    days.innerHTML = d <10?"0"+d:d;
    hours.innerHTML =h<10?"0"+h:h;
    minutes.innerHTML =m<10?"0"+m:m;
    seconds.innerHTML = s<10?"0"+s:s;

    
}
// uploadTime()
setInterval(uploadTime,1000)
