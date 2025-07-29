




// Step 1: fetch all items
const item = document.getElementById("item");
const inventory = document.getElementById("CheckInventory");

async function getProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.products;

    // Display categories
    products.forEach((product) => {
      let li = document.createElement("li");
      li.innerText = product.category;
      item.appendChild(li);
    });

    // Step 2: Try payment
    await addPayment(products);

    // Step 3: Check inventory
    await CheckInventory(products);

    // Step 4: Run background tasks in parallel
    const p1 = sendEmail();
    const p2 = createTrackingNumber();

    const results = await Promise.all([p1, p2]);
    results.forEach((result) => console.log(result));
    
  } catch (err) {
    console.log("Error:", err);
  }
}

function addPayment(data) {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    console.log("Payment success?", success);
    setTimeout(() => {
      success ? resolve("Payment success") : reject("Payment failed");
    }, 2000);
  });
}

function CheckInventory(data) {
  return new Promise((resolve) => {
    data.forEach((ite, i) => {
      setTimeout(() => {
        let Indev = document.createElement("div");
        let productName = document.createElement("p");
        let ItemStatus = document.createElement("p");

        productName.innerHTML = ite.title;
        ItemStatus.innerHTML = ite.stock > 0 ? ite.stock : "Out of stock";

        Indev.appendChild(productName);
        Indev.appendChild(ItemStatus);
        inventory.appendChild(Indev);

        // Resolve only after the last item
        if (i === data.length - 1) {
          resolve("Inventory check done");
        }
      }, i * 1000);
    });
  });
}

function sendEmail() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Order confirmation email sent");
    }, 1000);
  });
}

function createTrackingNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("📦 Delivery tracking number: #11111");
    }, 1500);
  });
}

// Start the process
getProducts();
