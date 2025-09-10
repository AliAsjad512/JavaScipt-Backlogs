
function changeBackground(color){
    document.body.style.backgroundColor =color;
}



const darkButton =document.getElementById('dark-mode-button');

darkButton.innerHTML= 'Black';



const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', () => {
    //console.log(document.body.style.backgroundColor);
    const currentColor = document.body.style.backgroundColor;
    if(!currentColor || currentColor == 'white'){
        changeBackground('black')
        themeButton.innerHTML = 'Light Mode';
    }
    else{
        changeBackground('white')
        themeButton.innerHTML = 'Dark Mode';
    }
})

// darkButton.addEventListener('click', function(){
// console.log('I got clicked');
// changeBackground('black')


// })

// darkButton.addEventListener('click', function(){
// console.log('Storing dark Mode value in DB');



// })