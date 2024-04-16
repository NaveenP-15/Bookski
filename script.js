var popupOverLay = document.querySelector(".popup-overlay")
var popupBox= document.querySelector(".popup-box")
var addPopupButton= document.getElementById("add-popup-button")


addPopupButton.addEventListener("click",function(){
    popupOverLay.style.display="block"
    popupBox.style.display="block"
})

var cancelButton = document.getElementById("cancel-popup")
    cancelButton.addEventListener("click",function(event){
    event.preventDefault()
    popupOverLay.style.display="none"
    popupBox.style.display="none"
})

var container = document.querySelector(".container")
var addBook = document.getElementById("add-book")
var bookTitle = document.getElementById("book-title-input")
var bookAuthor = document.getElementById("book-author-input")
var bookDiscription = document.getElementById("book-description-input")

addBook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML= `<h2>${bookTitle.value}</h2>
    <h5>${bookAuthor.value}</h5>
    <p>${bookDiscription.value}</p>
    <button id="delete-book" onclick="deletebook(event)">delete</button>`
    container.append(div)
    popupOverLay.style.display="none"
    popupBox.style.display="none"
})


function deletebook(event)
{
    event.target.parentElement.remove()
}