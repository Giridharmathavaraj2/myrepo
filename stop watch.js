let btnstart = document.querySelector(".start");
let btnstop = document.querySelector(".stop");
let btnreset = document.querySelector(".reset");
let hours = minutes = seconds = milliseconds =0,startTimer,stopTimer



btnstart.addEventListener('click',function(){
    btnstart.classList.add('start-active');
    btnstop.classList.remove('stop-active');

    startTimer = setInterval(function(){
       milliseconds++;
       if(milliseconds ==100){
        seconds++;
        milliseconds=0;
       }
       if(seconds ==60){
        minutes++;
        seconds=0
       }
       if(minutes ==60){
        hours++;
        minutes=0;
       }
       updateDisplay();
    },10)
 
})

btnstop.addEventListener('click',function(){
    btnstart.classList.remove('start-active');
    btnstop.classList.add('stop-active');
    clearInterval(startTimer);
    updateDisplay();
})

btnreset.addEventListener('click',function(){
    btnstart.classList.remove('start-active');
    btnstop.classList.remove('stop-active');
    let hours = minutes = seconds = milliseconds =0
    updateDisplay();
})


function updateDisplay(){
    // Formated display
    phours =hours <10 ? '0'+hours :hours;
    pminutes =minutes <10 ? '0'+minutes :minutes;
    pseconds =seconds <10 ? '0'+seconds :seconds;
    pmilliseconds =milliseconds <10 ? '0'+milliseconds :milliseconds;
document.querySelector(".hours").innerText =phours
document.querySelector(".minutes").innerText =pminutes
document.querySelector(".seconds").innerText =pseconds
document.querySelector(".milliseconds").innerText =pmilliseconds
}