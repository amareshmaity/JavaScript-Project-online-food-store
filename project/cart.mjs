function addToCart(item) {
  const storedCartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

  storedCartItems.push(item);
  sessionStorage.setItem("cartItems", JSON.stringify(storedCartItems));
  updateCartUI();

  updateCartCount();
}

// Function for remove cart items with button click
function removeFromCart(item) {
  const storedCartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

  // get index of items
  const index = storedCartItems.indexOf(item);

  // if index not equal to -1 (means there is atleast one item)
  if (index !== -1) {
    storedCartItems.splice(index, 1);
    sessionStorage.setItem("cartItems", JSON.stringify(storedCartItems));

    // Call updateCartUI to update session storage
    updateCartUI();

    updateCartCount();
  }
}

function updateCartUI() {
  const storedCartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

  // count the cart items
  let count = storedCartItems.length;
  document.getElementById("cart-count").textContent = count;
}

// funciton to update cartlist count at top
function updateCartCount() {
  // Access and count the items from session storage
  const storedCartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
  let count = storedCartItems.length;
  if (count > 0) {
    document.getElementById("cart-count").textContent = count;
  } else {
    document.getElementById("cart-count").textContent = "";
  }
}

// export some below functions
export { addToCart, removeFromCart, updateCartCount, updateCartUI };
