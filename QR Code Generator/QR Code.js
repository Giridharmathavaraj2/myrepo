const form =document.querySelector('#frm');
const output =document.querySelector('.output');
const spinner =document.querySelector('#loading')

function generateQRCode(){
    console.log('hi')
    const url=document.querySelector('#url').value;
    const size=document.querySelector('#size').value;
    const clrDark=document.querySelector('#colorDark').value;
    const clrLight=document.querySelector('#colorLight').value;
//  console.log(url,size,colorDark,colorLight)
if(url===''){
    alert('Please Enter your Url')
}
else{
    spinner.style.display='flex'
    
    setTimeout(()=>{
        spinner.style.display='none'
        document.querySelector('#qrcode').innerHTML =''
        const qrcode = new QRCode(document.getElementById('qrcode'),
        {text:url,
            width: size,
            height:size,
            colorDark:clrDark,
            colorLight: clrLight,
            correctLevel: QRCode.CorrectLevel.H

        })
    },2000)

}
}


form.addEventListener('submit', generateQRCode)