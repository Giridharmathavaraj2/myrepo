var Tamil = document.getElementById("tamil");
var English = document.getElementById("english");
var Maths = document.getElementById("maths");
var Science = document.getElementById("science");
var Social = document.getElementById("social");
var Others = document.getElementById("others");
var Total = document.getElementById("total");
var Percentage = document.getElementById("percent");

function calculateTotal() {
    var tamilinput = parseFloat(Tamil.value) || 0;
    var englishinput = parseFloat(English.value) || 0;
    var mathsinput = parseFloat(Maths.value) || 0;
    var scienceinput = parseFloat(Science.value) || 0;
    var socialinput = parseFloat(Social.value) || 0;
   

    var total = 0;
    var percent = 0;
  
        total = tamilinput + englishinput + mathsinput + scienceinput + socialinput;
        percent = (total / 500) * 100;
    
    Total.value = total;
    Percentage.value = percent.toFixed(2);
}
