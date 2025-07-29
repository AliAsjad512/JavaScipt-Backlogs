
  // Step 1 fetch all items
const item=document.getElementById('item');
const inventory=document.getElementById('CheckInventory')


function getProducts(){
    
    setTimeout(() =>{const url= fetch('https://dummyjson.com/products').then(( response) =>{
    return response.json().then((Obj) => {
        
        const product=Obj.products
        CheckInventory(product)
        product.forEach(products => {
           
           let li=document.createElement('li');
           li.innerText =products.category
            item.appendChild(li)
        })
        
    })
}).catch((err)=> console.log(err))
},1.5*1000)








            
    
}

function CheckInventory(data){
    
       
     data.forEach((ite,i) => {
          
          setTimeout(() =>{
             if(ite.stock >  0){
              let Indev=document.createElement('div');
              let productName= document.createElement('p');
              let ItemStatus = document.createElement('p');
              
              productName.innerHTML=ite.title;
              ItemStatus.innerHTML=ite.stock;
              Indev.appendChild(productName)
              Indev.appendChild(ItemStatus)
            
            inventory.appendChild(Indev)
             }

             else{
                let Indev=document.createElement('div');
             
              let ItemStatus = document.createElement('p');
              
             
              ItemStatus.innerHTML='Out of stock';
              Indev.appendChild(ItemStatus)
            
            inventory.appendChild(Indev)
             }
       
       

       
    },i*1000)
        

       })
       
  
        
        

    


}


getProducts()

//const db=fetch('https://dummyjson.com/products').then((respnse) => respnse.json().then((data)=> console.log(data)));



