//delete Books
const list = document.querySelector("#book-list ul");// select the parent element that is ul

list.addEventListener('click', function(e){ //add evenlistener to the parent element
    if(e.target.className == 'delete-btn') { // once where you click has the className = delete-btn
        const li = e.target.parentElement; //target the parent element of the delete button
        list.removeChild(li); // delete the button by removing the parent element li
    }
})

//add books
const addForm = document.forms['add-books']; //select the form element

addForm.addEventListener('submit', function(e){ //add event listener to the form
    e.preventDefault(); //stops the form from refreshing when you click the submit button
    const value = addForm.querySelector('input[type= "text"]').value;//get the value of the input in the form


//create elements
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

//add content
bookName.textContent = value;
deleteBtn.textContent = 'delete';

//add classes 
bookName.classList.add('title');
deleteBtn.classList.add('delete-btn');

//append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);

});

//hideBooks
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function(e){
    if(hideBox.checked) {
        list.style.display = 'none';
    } else {
        list.style.display = 'initial';
    }
})

//filter Books
const searchBar = document.forms['search-books'].querySelector('input')

searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    }) 
})

//tabbed content
const tabs = document.querySelector('.tabs')
const panels = document.querySelectorAll('.panel')
console.log(panels);








