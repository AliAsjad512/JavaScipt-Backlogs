



const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoItemsContainer = document.getElementById('todo-items-container');

addBtn.addEventListener('click',() =>{
  const value = todoInput.value;
  const li = document.createElement('li');
  li.innerText = value;
  const delBtn= document.createElement('button');
  delBtn.innerText='X';
  todoItemsContainer.appendChild(li);
  li.appendChild(delBtn)
  delBtn.addEventListener('click',function(){
    li.remove()
  })
  todoInput.value =''
  //todoItemsContainer.appendChild(delBtn)

})
