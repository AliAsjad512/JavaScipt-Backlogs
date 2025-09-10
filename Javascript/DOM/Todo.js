
const AddValue = document.getElementById('add');
const resultValue = document.getElementById('Input');
const MainDiv = document.getElementById('main');

//console.log(resultValue)
AddValue.addEventListener('click',() =>{
    const InputValue = resultValue.value;
     console.log(InputValue)
      const ListDiv =document.createElement('div');
    const liItem =document.createElement('li');
    const ExitBtn= document.createElement('p');
    ExitBtn.innerHTML = 'X';

    
    liItem.innerHTML = InputValue;
    ListDiv.appendChild(liItem,ExitBtn)
      ListDiv.appendChild(ExitBtn)
    MainDiv.appendChild(ListDiv)
    ocalStorage.setItem("set",JSON.stringify("MainDive"));
    ExitBtn.addEventListener('click',() =>{
        MainDiv.remove(ListDiv)
        MainDiv.remove(ExitBtn)
    })

    
})

