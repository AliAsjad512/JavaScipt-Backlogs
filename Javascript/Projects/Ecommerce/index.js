const product = document.querySelector('.products');
//const form = document.getElementById('myform');
const form = document.getElementById("myform");
const productsDiv = document.querySelector(".products");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = document.getElementById("site-search").value.toLowerCase();
//console.log(searchValue);
  // Hide all cards that don’t match
  // let findItems=SerachItems(items);

  // let filteritems= findItems.filter((item) => item.toLowerCase().includes(searchValue));

  
});


async function getProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const items = data.products;
    
    items.forEach((data) => {
      const card = document.createElement('div');
      card.classList.add('card');

      const productImage = document.createElement('img');
      productImage.src = data.thumbnail;

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

      product.appendChild(card);
    });
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
}



getProducts().then((item)=> console.log(item)); // just call it, no need console.log
