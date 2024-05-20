function addToWishlist(item) {
  const storedItems = JSON.parse(sessionStorage.getItem("wishlistItems")) || [];

  if (!storedItems.includes(item)) {
    storedItems.push(item);
    console.log("Add wishlist items works");
    sessionStorage.setItem("wishlistItems", JSON.stringify(storedItems));
    updateWishlistUI();
    updateWishCount();
  }
}

function removeFromWishlist(item) {
  const storedItems = JSON.parse(sessionStorage.getItem("wishlistItems")) || [];
  console.log("remove wishlist items works");
  // console.log(storedItems)

  const index = storedItems.indexOf(item);

  if (index !== -1) {
    storedItems.splice(index, 1);
    sessionStorage.setItem("wishlistItems", JSON.stringify(storedItems));
    updateWishlistUI();
    updateWishCount();
  }
}

function updateWishlistUI() {
  const storedItems = JSON.parse(sessionStorage.getItem("wishlistItems")) || [];
  console.log("Update wishlist items works");
  console.log(storedItems);
  // count the wishlist items
  let count = storedItems.length;
  document.getElementById("wishlist-count").textContent = count;
}

// funciton to update wishlist count at top
function updateWishCount() {
  // Access and count the items from session storage
  const storedWishItems =
    JSON.parse(sessionStorage.getItem("wishlistItems")) || [];
  let count = storedWishItems.length;
  if (count > 0) {
    document.getElementById("wishlist-count").textContent = count;
  } else {
    document.getElementById("wishlist-count").textContent = "";
  }
}

export { addToWishlist, removeFromWishlist, updateWishCount };
