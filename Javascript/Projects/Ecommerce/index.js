const productDiv = document.querySelector('.products');
const searchInput = document.getElementById("site-search");

let allProducts = []; // store all products globally

// Fetch products once
async function getProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    allProducts = data.products; // save globally
    renderProducts(allProducts); // show all products initially
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
}

// Render an array of products into the DOM
function renderProducts(items) {
  productDiv.innerHTML = ""; // clear previous products
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

    productDiv.appendChild(card);
  });
}

// Live search as user types
searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();

  const filteredProducts = allProducts.filter(product =>
    product.title.toLowerCase().startsWith(searchValue) // ✅ starts with
  );

  renderProducts(filteredProducts);
});

// Call fetch once
getProducts();
