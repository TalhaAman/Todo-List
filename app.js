// const searchBar = document.querySelector('.search-bar input');
const todoList = document.querySelector('.todo-list');
const addForm = document.querySelector('.add');

// Adding new Todos to the list
// const addingTodo = addedText => {
//   todoList.innerHTML +=
//   `<li class="list-item">
//     <span>${addedText}</span>
//     <i class="far fa-trash-can delete"></i>
//   </li>`
// }
// addForm.addEventListener('submit', e => {
//   e.preventDefault();
//   const addedText = addForm.add.value.trim();
//   if(addedText.length){
//   addingTodo(addedText);
//   addForm.reset();
//   }
// })

// // Deleting Todo-items by Clicking on Bin icon
// todoList.addEventListener('click', e => {
//   if(e.target.classList.contains('delete')){
//     e.target.parentElement.remove();
//   }
// })


addForm.addEventListener('submit', e => {
  e.preventDefault();
const li = document.createElement('li');
li.classList.add('list-item');

const addedText = addForm.add.value.trim();
const text = document.createTextNode(addedText);
li.appendChild(text);

const bin =document.createElement('i');
bin.classList.add('far','fa-trash-can','delete');
li.appendChild(bin);
if(text.length){
  todoList.insertBefore(li, todoList.childNodes[2]);
  addForm.reset();
}
})
todoList.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
})