let cart = [];

// Function to filter products
function filterProducts(category) {
  const products = document.querySelectorAll('.product');
  products.forEach((product) => {
    if (product.dataset.category === category || category === 'all') {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

// Function to add a product to the cart
function addToCart(productName) {
  cart.push(productName);
  updateCart();
  alert(`${productName} has been added to your cart!`);
}

// Function to update the cart display
function updateCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = ''; // Clear current list
  cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    cartList.appendChild(li);
  });
}

