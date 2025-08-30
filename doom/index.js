
const wrapper = document.getElementById("wrapper")

//console.log(wrapper);

const titles = document.getElementsByClassName("title")
//console.log(titles)

const list = document.getElementsByTagName("li")
//console.log(list)
//console.log(Array.isArray(list));

const liArray = Array.from(list)
//console.log(liArray);

//console.log(Array.isArray(liArray))

//const ul = document.querySelector("ul")
//console.log(ul)

const ul = document.querySelector("#book-list")
//console.log(ul)

const ull = document.querySelectorAll("li")
//console.log(ull)


const bookList = document.querySelector("#book-list ul")

//const deleteBook = (event)=>{

//}

//bookList.addEventListener("click",(event)=>)

bookList.addEventListener("click",(event)=>{
    //console.log(event)
    if(event.target.className === "delete"){
        //let li = event.target.closest("li")
        let li = event.target.parentElement
        //console.log(li)
        bookList.removeChild(li)
    }

});
// const addBookForm = document.getElementById("add-book")
// //console.log(addBookForm)

// addBookForm.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     const value = document.querySelector("#add-book input").value.trim()
//     //console.log(value)

    //if(value!=""){
        // let newLiTag = document.createElement("li")
        // let firstSpan = document.createElement("span")
        // let secondSpan = document.createElement("span")
    

        // firstSpan.classList.add("name")
        // secondSpan.classList.add("delete")


        // firstSpan.textContent = value
        // secondSpan.textContent = "Delete"

        // newLiTag.appendChild(firstSpan)
        // newLiTag.appendChild(secondSpan)
        // bookList.appendChild(newLiTag)
        // // addBookForm.reset()
//     }else{
//         alert("Please enter a book name")
//     }
//     addBookForm.reset()
// })


const addBookForm = document.getElementById("add-book")
//console.log(addBookForm)

addBookForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    const value = document.querySelector("#add-book input").value.trim()
    console.log(value);

    if(value!=""){
        const{newLiTag,firstSpan,secondSpan} = createNewElement()
        addClassName(firstSpan,secondSpan)
        addTextContent(firstSpan,secondSpan,value)
        appendChild(newLiTag,firstSpan,secondSpan)
        bookList.appendChild(newLiTag)
        addBookForm.reset();
    }else{
        alert("Please enter a book name")
     }
    addBookForm.reset()
 });


function createNewElement(bookName) {
    let newLiTag = document.createElement("li")
    let firstSpan = document.createElement("span")
    let secondSpan = document.createElement("span")

    return {newLiTag, firstSpan, secondSpan}
}
function addClassName(firstSpan, secondSpan) {
    firstSpan.classList.add("name")
    secondSpan.classList.add("delete")
}
function addTextContent(firstSpan, secondSpan, bookName) {
    firstSpan.textContent = bookName
    secondSpan.textContent = "Delete" 
}
function appendChild(newLiTag, firstSpan, secondSpan) {
    newLiTag.appendChild(firstSpan)
    newLiTag.append(secondSpan)
    bookList.appendChild(newLiTag)
}
function searchBook(){
    const searchBook = document.forms["search-books"].querySelector("input");
    searchBook.addEventListener("keyup",(event)=>{
        const term = event.target.value.toLowerCase()
        const foundBook = bookList.getElementsByTagName("li")
        Array.from(foundBook).forEach((book) => {
            const title = book.firstElementChild.textContent
            if(title.toLowerCase().indexOf(term) != -1){
                book.style.display = "block"
            }else{
                book.style.display = "none"
            }
        })
    })
}
searchBook()
    
    