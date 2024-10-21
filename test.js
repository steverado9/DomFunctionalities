console.log(document);
//ID
const banner = document.getElementById('page-banner');
//ClassName
const title = document.getElementsByClassName('title');
console.log(title);
console.log(title[0]);
console.log(Array.isArray(Array.from(title))); //converted an HTML COLLECTION to an array
Array.from(title).forEach(function(item){ //looped through the array of titles
    console.log(item); 
})
//TagName
const lis = document.getElementsByTagName('li');
for (let i = 0; i < lis.length; i++) {
    console.log(lis[i]);  
}
// QuerySelector
const titleKhafka = document.querySelector('#first-section li:nth-child(2) .title');
//QuertSelectorAll
const titles = document.querySelectorAll('.title');
Array.from(titles).forEach(function(title){
    console.log(title); 
})

//textContent
console.log(titles);

Array.from(titles).forEach(function(title){
    console.log(title.textContent);
    
})

//add more text content
Array.from(titles).forEach(function(title){
    title.textContent +=' (book title)'  
})

// apeend new text using innerHTML
banner.innerHTML = '<h1>This is the new innerHTML</h1>';

//node
const banner = document.querySelector('#page-banner');
console.log('#page-banner node type is', banner.nodeType);
console.log('#page-banner name is', banner.nodeName);
console.log('#page-banner has child nodes', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true)// we set it to true, so we can clone the children of the node also
console.log(clonedBanner);

//grabbing parent and children nodes of an element
const bookList = document.querySelector('#book-list');
console.log('The parentNode of booklist is:', bookList.parentNode);
console.log('The parentelement of booklist is:', bookList.parentElement.parentElement);

console.log('The children of booklist is:', bookList.children);

//grabbing sibling elements and nodes of an element
console.log('booklist next sibling is:', bookList.nextSibling);
console.log('booklist next element sibling is:', bookList.nextElementSibling);

console.log('booklist previous sibling is:', bookList.previousSibling);
console.log('booklist previous element sibling is:', bookList.previousElementSibling);

//How to delete in javascript without event bubbling
const btns = document.querySelectorAll('#book-list li .delete-btn'); //select the buttons
Array.from(btns).forEach(function(btn){ //looping through the nodelist of buttons
    btn.addEventListener('click', function(e){ // adding an event handler to the button
        const li = e.target.parentNode;//targetting the parent of the button clicked (li)
        li.parentNode.removeChild(li);// This is used to delete in javascript. ul.removeChild(li)
    })   
})

//Event bubbling
const list = document.querySelector("#book-list ul")// select the parent element that is ul

list.addEventListener('click', function(e){ //add evenlistener to the parent element
    if(e.target.className == 'delete-btn') { // once where you click has the className = delete-btn
        const li = e.target.parentElement; //target the parent element of the delete button
        list.removeChild(li); // delete the button by removing the parent element li
    }
})

const link = document.querySelector('#page-banner a');
//e.preventDefault()
link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('navigation to', e.target.textContent, 'was prevented'); 
})





