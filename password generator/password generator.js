
const outputElement = document.querySelector('#output');
const btncopy = document.querySelector('#btncopy');
const passwordLengthElement = document.querySelector("#lenght"); // Corrected ID
const numberElement = document.querySelector("#number");
const capitalElement = document.querySelector("#capital");
const smallElement = document.querySelector("#small");
const symbolElement = document.querySelector("#symbol");
const frmElement = document.querySelector('#yourFormId');


 btncopy.addEventListener('click', async ()=>{
    const pass = outputElement.value;
    if(pass){
        await navigator.clipboard.writeText(pass);
        alert('password is copy in clipboard')

    }else{
        alert('There is no password to copy ')
    }
 })
 

function generateRandomChar(min,max){
    const limit =(max-min)+1;
    return(String.fromCharCode(Math.floor(Math.random()*limit)+min))
}
// console.log(generateRandomChar(65,90))

function capitalValue(){
    return generateRandomChar(65,90)
}

function smallValue(){
    return generateRandomChar(97,122)
}

function numberValue(){
    return generateRandomChar(48,57)
}


function symbolValue(){
    const symbols = "`₹~!@#$%^&*()_+-=}{][;'.,></?"
    return symbols[Math.floor(Math.random()*symbols.length)]
}
 const functionArray =[
    {
        element:capitalElement,
        fun: capitalValue
    },
    {
        element:smallElement,
        fun: smallValue
    },
    {
        element:numberElement,
        fun: numberValue
    },
    {
        element:symbolElement,
        fun: symbolValue
    }
 ];

 frmElement.addEventListener('submit', (e) => {
    e.preventDefault();
    let len = passwordLengthElement.value;
    console.log(length);
    let generatePassword = "";

    const funArray = functionArray.filter(({ element }) => element.checked);
console.log(funArray)
    for (let i = 0; i < len; i++) {
        const index = Math.floor(Math.random() * funArray.length);
        const letter = funArray[index].fun();
        generatePassword += letter; // Append the generated letter, not the length
    }

    outputElement.value = generatePassword;
});

/* ASCII
65-90 A-Z
97-122 a-z
48-57 0-9
32 space 
*/
