// bmi.js
let reset = document.querySelector("#reset");
let calculate = document.querySelector("#calculate");


function calculateBmi(){
    var height = document.querySelector("#height").value;
var weight = document.querySelector("#weight").value;
let val = document.querySelector("#val");
let text = document.querySelector("#text");

text.innerHTML ="good"
if(!height || height<0 || isNaN(height)){
    val.innerHTML = "Please provide value Height"
}
else if(!weight || weight<0 || isNaN(weight)){
    val.innerHTML = "Please provide value Weight"
}
const bmi =(weight/((height*height)/10000)).toFixed(2);
if(bmi < 18.5){
    text.innerHTML =" Under Weight"
    val.innerHTML = `${bmi}`
}
else if( bmi>18.5 && bmi<24.9){
    text.innerHTML =" Good"
    val.innerHTML = `${bmi}`

}
else if( bmi>24.9 && bmi<29.9){
    text.innerHTML =" Over Weight"
    val.innerHTML = `${bmi}`
    
}
else{
    text.innerHTML =" Obesity"
    val.innerHTML = `${bmi}`
    
}



}
function update(){
    document.querySelector("#height").value = "";
    document.querySelector("#weight").value = "";

    // Reset result display
    document.querySelector("#val").innerHTML = "";
    document.querySelector("#text").innerHTML = "good";
}

calculate.addEventListener('click', function() {
    calculateBmi()
});
reset.addEventListener('click', function() {
   update()
});
