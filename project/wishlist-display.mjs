import { foods } from "./food.mjs";
import { addToCart, updateCartCount } from "./cart.mjs";
import { updateWishCount } from "./wishlist.mjs";

document.addEventListener("DOMContentLoaded", () => {
  // const wishlistItemsList = document.getElementById('wishlist-items');

  const storedWishItems =
    JSON.parse(sessionStorage.getItem("wishlistItems")) || [];
  const storedItemsCart = JSON.parse(sessionStorage.getItem("cartItems")) || [];

  // update wishlist count at top
  updateWishCount();
  // update cart count at top
  updateCartCount();

  // var price = 0;
  const postWishItems = `
        ${storedWishItems
          .map((itm) => {
            let td = Object.entries(foods).map((food) => {
              let m = food[1].map((item) => {
                if (itm == item["name"]) {
                  // price = price + item['price'];
                  return `<tr><td><img src="${item["url"]}" alt="" width="100" height="100"/></td><td id = "item-${item["name"]}">${item["name"]}</td><td><button type="button" class="cartbtn" data-button-to-store="item-${item["name"]}">Add to cart</button></td></tr>`;
                }
              });
              return m;
            });

            return td;
          })
          .join("\n")
          .replace(/,/g, "")}`;

  // post html template
  document.getElementById("tbdy").innerHTML = postWishItems;

  // Add Add to cart functionality for cart button

  const cartButtons = document.querySelectorAll(".cartbtn");

  console.log(cartButtons);

  cartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const foodItem = document.getElementById(
        button.dataset.buttonToStore
      ).textContent;
      console.log(foodItem);
      addToCart(foodItem);
      console.log(cartItems);
      console.log(storedItemsCart);
    });
  });
});

// update wishlist count at top
updateWishCount();
// update cart count at top
updateCartCount();
