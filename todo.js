var btn = document.getElementById("add-popup-button");
var popupOverlay = document.querySelector(".popup-overlay")
var popupBox = document.querySelector(".popup-box");
var cancelpopup = document.getElementById("cancel-popup") ;
btn.addEventListener("click",function(){
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});
cancelpopup.addEventListener("click",function(){
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});
// select container,add-book, book-title-input, book-author-input, book-discription
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var titleinput = document.getElementById("book-title-input");
var authorinput = document.getElementById("book-author-input");
var discriptioninput = document.getElementById("book-discription");
addbook.addEventListener("click",function(){
    // event.preventDefault();
    var div =document.createElement("div")
    div.setAttribute("class","book-container");
    div.innerHTML = `<h2>${titleinput.value}</h2>
   <h5>${authorinput.value}</h5>
   <p>${discriptioninput.value}</p>
   <button onclick="deletebook(event)">Delete</button>`
   
    container.append(div);
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";


})
function deletebook(event){
    event.target.parentElement.remove();
}