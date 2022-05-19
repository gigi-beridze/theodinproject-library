// let myLibrary = [];

// function Book(title,author,pages){
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
// }

// const addBookToLibrary = (title,author,pages) => {
//   let book = new Book(title,author,pages);
//   myLibrary.push(book);
// }
const addToButton = document.getElementById('btn')
const title = document.getElementById('title')
const values = document.getElementById('values')

addToButton.addEventListener('click', function(){
  if(title.value == 0){
    alert('enter text')
  }else{
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = title.value
    values.appendChild(paragraph)
    title.value = ""
    paragraph.addEventListener('click',function() {
      paragraph.style.textDecoration = "line-through"
    })
    paragraph.addEventListener('dblclick',function() {
      values.removeChild(paragraph)
    })
  }
})