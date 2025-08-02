const product = document.querySelector('.products');

async function getProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const items = data.products;

    items.forEach((data) => {
        
      const card = document.createElement('div');
      card.classList.add('card'); // optional, for styling

      const productImage = document.createElement('img');
      productImage.src = data.thumbnail; // Use "thumbnail" or "images[0]"

      const productName = document.createElement('p');
      productName.textContent = data.title;

      const productPrice = document.createElement('p');
      productPrice.textContent = `Price: $${data.price}`;

      const productStock = document.createElement('p');
      productStock.textContent = `In stock: ${data.stock}`;

      card.appendChild(productImage);
      card.appendChild(productName);
      card.appendChild(productPrice);
      card.appendChild(productStock);

      product.appendChild(card); // ✅ append card to .products container
    });
    

  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
}

function searchProduct(data){
   const search = document.getElementById('site-search');
   console.log(search.value)
   const submit = document.querySelector('submit')
//const form = document.querySelector('form');

submit.addEventListener('submit', function (e) {
  e.preventDefault(); 
  data.forEach((item)=>{
    if(item.title.include(search.value)){
     console.log(item.title)
    }
    else{
  console.log('Not found')
    }
  })
 // console.log(search.value); 
});


}

console.log(getProducts());
