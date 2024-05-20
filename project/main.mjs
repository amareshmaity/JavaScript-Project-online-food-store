import { postHTML } from "./food.mjs";
import {
  addToWishlist,
  removeFromWishlist,
  updateWishCount,
} from "./wishlist.mjs";
import { addToCart, removeFromCart, updateCartCount } from "./cart.mjs";

document.querySelector("#food-container").innerHTML = postHTML;

const wishlistButtons = document.querySelectorAll(".wishbtn");

// Add functionality to wishlist buttons
wishlistButtons.forEach(function (button) {
  let wishlistItems = [];
  sessionStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));

  button.addEventListener("click", function () {
    const foodItem = document.getElementById(
      button.dataset.buttonToStore
    ).textContent;

    // get wishlist items from session storage
    const storedWishItems =
      JSON.parse(sessionStorage.getItem("wishlistItems")) || [];

    // if button contains class heart
    if (this.classList.contains("heart")) {
      // if storedWishItems contain a particular food
      if (storedWishItems.includes(foodItem)) {
        // console.log("Before remove function call");
        removeFromWishlist(foodItem);
        this.classList.remove("changeColor");
      } else {
        addToWishlist(foodItem);
        this.classList.add("changeColor");
      }
    } else {
      // Get the grandparent element
      const gpofaddtowishlist = this.parentNode.parentNode;

      const childElements = gpofaddtowishlist.querySelectorAll("*"); // Select all child elements
      // console.log(childElements)
      for (const child of childElements) {
        if (child.classList.contains("heart")) {
          let btns = child.classList;

          if (storedWishItems.includes(foodItem)) {
            removeFromWishlist(foodItem);
            btns.remove("changeColor");
            if (!this.classList.contains("heart"))
              this.textContent = "Add to Wishlist";
          } else {
            addToWishlist(foodItem);
            btns.add("changeColor");
            if (!this.classList.contains("heart"))
              this.textContent = "Remove Wishlist";
          }
        }
      }
    }
  });
});

//For cart list
// Access button from wistlist.html

const cartButtons = document.querySelectorAll(".cartbtn");

cartButtons.forEach(function (button) {
  // Initialize cart items
  let cartItems = [];

  // stored cart items to session storage
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Add functionality to Add to Cart buttons
  button.addEventListener("click", function () {
    const foodItem = document.getElementById(
      button.dataset.buttonToStore
    ).textContent;

    // get cart items from session storage
    const storedCartItems =
      JSON.parse(sessionStorage.getItem("cartItems")) || [];

    if (storedCartItems.includes(foodItem)) {
      removeFromCart(foodItem);
      this.textContent = "Add to Cart";
      // btns.remove('changeColor');
    } else {
      addToCart(foodItem);
      this.textContent = "Remove cart";
    }
  });
});
