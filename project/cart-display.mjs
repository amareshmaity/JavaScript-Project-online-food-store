import { foods } from "./food.mjs";
import { removeFromCart, updateCartCount } from "./cart.mjs";
import { updateWishCount } from "./wishlist.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const cartItemsList = document.getElementById("cart-items");

  const storedCartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

  // update wishlist count at top
  updateWishCount();
  // update cart count at top
  updateCartCount();

  // var price = 0;
  const postCartItems = `
${storedCartItems
  .map((itm) => {
    let td = Object.entries(foods).map((food) => {
      let m = food[1].map((item) => {
        if (itm == item["name"]) {
          // price = price + item['price'];
          return `<tr><td><img src="${item["url"]}" alt="" width="100" height="100"/></td><td id = "itm-${item["name"]}">${item["name"]}</td><td><button type="button" class="cartbtn" data-button-to-store="itm-${item["name"]}">Remove cart</button></td></tr>`;
        }
      });
      return m;
    });

    return td;
  })
  .join("\n")
  .replace(/,/g, "")}`;

  // post html template
  document.getElementById("tbdy").innerHTML = postCartItems;

  // Order summary
  updateOrderSummary();

  // Add Remove cart functionality for cart button
  // access cart buttons
  const cartButtons = document.querySelectorAll(".cartbtn");

  // For each for all buttons
  cartButtons.forEach(function (button) {
    // Add functionality to each button
    button.addEventListener("click", function () {
      const foodItem = document.getElementById(
        button.dataset.buttonToStore
      ).textContent;

      // get cart items from session storage
      const storedCartItems =
        JSON.parse(sessionStorage.getItem("cartItems")) || [];

      if (storedCartItems.includes(foodItem)) {
        removeFromCart(foodItem);

        // get grandpatent node tr
        const gptr = this.parentNode.parentNode;
        // console.log(gptr)
        // Remove tr for this button click
        gptr.remove();

        //to update order summary after remove items
        updateOrderSummary();

        // update cart count at top
        updateCartCount();
      }
    });
  });
});

// function to update order summary
function updateOrderSummary() {
  const storedCartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
  // Order summary
  var price = 0;
  let tax = 10;
  const postOrderSummary = `
${storedCartItems
  .map((itm) => {
    let td = Object.entries(foods).map((food) => {
      let m = food[1].map((item) => {
        if (itm == item["name"]) {
          price = price + item["price"];
        }
      });
      return m;
    });

    return td;
  })
  .join("\n")
  .replace(
    /,/g,
    ""
  )}<tr><td>Subtotal</td><td>₹ ${price}</td></tr><tr><td>Shipping</td><td>₹ ${0}</td></tr><tr><td>Taxes</td><td>${tax}%</td></tr><tr><td>Total</td><td>₹ ${
    price + (price * tax) / 100
  }</td></tr>`;

  // post ordersummary html template
  document.getElementById("order-bdy").innerHTML = postOrderSummary;
}

// update wishlist count at top
updateWishCount();
// update cart count at top
updateCartCount();
