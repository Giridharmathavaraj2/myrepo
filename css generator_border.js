// it is only for border
document.addEventListener("DOMContentLoaded",function(){
    const allBorder =document.getElementById("all");
    const border =document.getElementById("border");
    const code =document.getElementById("code");
    const container =document.querySelector(".container");
    const btnCopy =document.querySelector("#btnCopy");
    const border_sytle = document.getElementById("borderStyle")
    let all_radius =0;
    let border1 ="solid";
    let borderSize = 2;
    const all_value =document.getElementById("all_value");
    function allBordersUpdate(){

        all_radius= allBorder.value;
        borderSize =border.value
        all_value.innerText =all_radius+"px";
        var coding =`border-radius:${all_radius}px;
        border:${borderSize}px ${border1} red`;
        code.value =coding;
        container.style.cssText = coding;
    }
    allBorder.addEventListener("mousemove",allBordersUpdate);
    allBorder.addEventListener("change",allBordersUpdate);

    border.addEventListener("mousemove",allBordersUpdate);
    border.addEventListener("change",allBordersUpdate);


    btnCopy.addEventListener("click", function(){
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert(" code copied")
    })
    allBordersUpdate();
    border_sytle.addEventListener('change',function(){
        border1=this.value;
        allBordersUpdate()
    })
})
