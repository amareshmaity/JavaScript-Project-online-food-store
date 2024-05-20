// import { addToWishlist, removeFromWishlist, wishlistItems } from './wishlist.mjs';

//Create a class to create foods
class Food {
  constructor(name, url, price, details) {
    this.name = name;
    this.url = url;
    this.price = price;
    this.details = details;
  }
}

//biryani
let biryani = [
  new Food(
    "Hyderabadi Biryani",
    "Images\\biriyani\\b1.jpg",
    200,
    "Iconic dish from Hyderabad with marinated meat, basmati rice, caramelized onions, and aromatic spices"
  ),
  new Food(
    "Lucknowi Biryani",
    "Images\\biriyani\\b2.jpg",
    250,
    "Delicate Awadhi specialty featuring tenderized meat, saffron-infused rice, and subtle flavors like rose water"
  ),
  new Food(
    "Kolkata Biryani",
    "Images\\biriyani\\b3.jpg",
    180,
    "Unique blend with chicken, potatoes, biryani masala, rose water, and kewra essence"
  ),
  new Food(
    "Malabar Biryani",
    "Images\\biriyani\\b4.jpg",
    220,
    "Kerala's coconut-infused biryani with tender meat, fragrant rice, and spices like fennel and cinnamon"
  ),
  new Food(
    "Dum Pukht Biryani",
    "Images\\biriyani\\b5.jpg",
    300,
    "Slow-cooked Awadhi delicacy, sealed pot cooking, rich flavors, often made with mutton"
  ),
  new Food(
    "Sindhi Biryani",
    "Images\\biriyani\\b6.jpg",
    200,
    "Spicy and tangy Sindhi favorite with marinated meat, aromatic spices, yogurt, and potatoes"
  ),
  new Food(
    "Bombay Biryani",
    "Images\\biriyani\\b7.jpg",
    180,
    "Mumbai fusion with mixed meats, potatoes, and fragrant spices"
  ),
  new Food(
    "Chettinad Biryani",
    "Images\\biriyani\\b8.jpg",
    230,
    "Bold Tamil Nadu specialty with aromatic spices like star anise, black stone flower, and kalpasi, served with spicy gravy"
  ),
  new Food(
    "Goan Biryani",
    "Images\\biriyani\\b9.jpg",
    250,
    "Goan-Portuguese fusion with marinated meat, fragrant rice, coconut milk, and a variety of spices"
  ),
];

// Chicken
let chicken = [
  new Food(
    "Butter Chicken",
    "Images\\chicken\\c1.jpg",
    210,
    "Creamy tomato gravy with tender chicken, butter, cream, and spices."
  ),
  new Food(
    "Chicken Tikka Masala",
    "Images\\chicken\\c2.jpg",
    190,
    "Grilled chicken in a creamy tomato sauce with aromatic spices"
  ),
  new Food(
    "Chicken Tandoori",
    "Images\\chicken\\c3.jpg",
    150,
    "Charred, smoky chicken cooked in a tandoor, served with naan and chutney"
  ),
  new Food(
    "Chicken Korma",
    "Images\\chicken\\c4.jpg",
    185,
    "Mild and creamy curry with chicken, yogurt, nuts, and spices"
  ),
  new Food(
    "Chicken Curry",
    "Images\\chicken\\c5.jpg",
    160,
    "Flavorful curry with chicken, onions, tomatoes, garlic, and a blend of spices"
  ),
];

// paneer
let paneer = [
  new Food(
    "Paneer Butter Masala",
    "Images\\paneer\\p1.jpg",
    190,
    "Creamy tomato gravy with paneer, butter, cream, and aromatic spices."
  ),
  new Food(
    "Palak Paneer",
    "Images\\paneer\\p2.jpg",
    210,
    "Paneer cooked in vibrant spinach gravy with onions, tomatoes, and spices."
  ),
  new Food(
    "Paneer Tikka",
    "Images\\paneer\\p3.jpg",
    380,
    "Grilled paneer cubes with bell peppers, onions, and spices, served with mint chutney."
  ),
  new Food(
    "Paneer Bhurji",
    "Images\\paneer\\p4.jpg",
    300,
    "Scrambled paneer with onions, tomatoes, and spices, served with bread."
  ),
  new Food(
    "Kadai Paneer",
    "Images\\paneer\\p5.jpg",
    250,
    "Spicy gravy with paneer, bell peppers, onions, and tomatoes, seasoned with kadai masala."
  ),
  new Food(
    "Paneer Makhani",
    "Images\\paneer\\p6.jpg",
    320,
    " Creamy gravy with paneer, tomatoes, cream, cashews, and spices"
  ),
];

// vegetables
let vegetables = [
  new Food(
    "Vegetable Pulao",
    "Images\\vegetable\\v1.jpg",
    160,
    "Fragrant rice with mixed vegetables and spices."
  ),
  new Food(
    "Aloo Gobi",
    "Images\\vegetable\\v2.jpg",
    179,
    "Potatoes and cauliflower cooked with spices."
  ),
  new Food(
    "Mixed Vegetable Curry",
    "Images\\vegetable\\v3.jpg",
    172,
    "Colorful veggies in tomato-based gravy."
  ),
  new Food(
    "Bhindi Masala",
    "Images\\vegetable\\v4.jpg",
    169,
    "Okra cooked with onions, tomatoes, and spices."
  ),
  new Food(
    "Dal Tadka",
    "Images\\vegetable\\v5.jpg",
    188,
    "Comforting lentil dish with spices."
  ),
  new Food(
    "Baingan Bharta",
    "Images\\vegetable\\v6.jpg",
    181,
    "Smoky roasted eggplant with spices."
  ),
  new Food(
    "Chana Masala",
    "Images\\vegetable\\v7.jpg",
    157,
    "Chickpea curry with aromatic spices."
  ),
  new Food(
    "Matar Paneer",
    "Images\\vegetable\\v8.jpg",
    144,
    " Paneer and peas in tomato gravy."
  ),
];

// Chinese
let chinese = [
  new Food(
    "Vegetable Manchurian",
    "Images\\chinese\\ch1.jpg",
    300,
    "Deep-fried vegetable balls tossed in a tangy and spicy Manchurian sauce made with garlic, ginger, soy sauce, and chili."
  ),
  new Food(
    "Chicken Hakka Noodles",
    "Images\\chinese\\ch2.jpg",
    250,
    "Stir-fried noodles tossed with chicken, assorted vegetables, garlic, ginger, soy sauce, and chili sauce, cooked in the Hakka style."
  ),
  new Food(
    "Chilli Paneer",
    "Images\\chinese\\ch3.jpg",
    188,
    " Cubes of paneer tossed with onions, bell peppers, garlic, ginger, soy sauce, and chili sauce, creating a spicy and flavorful Indo-Chinese dish."
  ),
  new Food(
    "Schezwan Fried Rice",
    "Images\\chinese\\ch4.jpg",
    260,
    "Spicy fried rice cooked with vegetables, eggs, or chicken, flavored with Schezwan sauce, garlic, ginger, and a blend of spices."
  ),
  new Food(
    "Sweet and Sour Chicken",
    "Images\\chinese\\ch5.jpg",
    349,
    "Crispy chicken pieces coated in a sweet and tangy sauce made with vinegar, sugar, ketchup, and soy sauce, with bell peppers and pineapple."
  ),
  new Food(
    "Vegetable Spring Rolls",
    "Images\\chinese\\ch6.jpg",
    269,
    "Crispy fried rolls filled with a mixture of vegetables like cabbage, carrots, and bean sprouts, seasoned with soy sauce and spices."
  ),
];

// southIndian
let southIndian = [
  new Food(
    "Masala Dosa",
    "Images\\southIndian\\s1.jpg",
    88,
    "Crispy rice crepe filled with a spiced potato mixture and served with coconut chutney and sambar."
  ),
  new Food(
    "Idli Sambar",
    "Images\\southIndian\\s2.jpg",
    152,
    "Steamed rice cakes served with flavorful lentil soup (sambar) and coconut chutney, a classic South Indian breakfast."
  ),
  new Food(
    "Uttapam",
    "Images\\southIndian\\s3.jpg",
    199,
    "Thick rice pancake topped with onions, tomatoes, green chilies, and cilantro, served with coconut chutney and sambar."
  ),
  new Food(
    "Pongal",
    "Images\\southIndian\\s4.jpg",
    98,
    " Comforting rice and lentil dish seasoned with cumin, black pepper, and curry leaves, often served with coconut chutney and sambar."
  ),
  new Food(
    "Vada Sambar",
    "Images\\southIndian\\s5.jpg",
    80,
    "Crispy lentil fritters served with tangy lentil soup (sambar) and coconut chutney, a popular South Indian snack."
  ),
  new Food(
    "Rava Dosa",
    "Images\\southIndian\\s6.jpg",
    200,
    "Thin and crispy semolina crepe with a slightly tangy flavor, served with coconut chutney and sambar."
  ),
  new Food(
    "Mysore Masala Dosa",
    "Images\\southIndian\\s7.jpg",
    130,
    "Spicy variant of the masala dosa with a layer of fiery red chutney spread on the inside, filled with potato masala, and served with chutney and sambar."
  ),
];

// pizza
let pizza = [
  new Food(
    "Margherita Pizza",
    "Images\\pizza\\p1.jpg",
    250,
    "Classic Italian pizza with tomato sauce, fresh mozzarella, basil, and olive oil"
  ),
  new Food(
    "Pepperoni Pizza",
    "Images\\pizza\\p2.jpg",
    300,
    "American favorite with tomato sauce, pepperoni, and mozzarella."
  ),
  new Food(
    "Vegetarian Supreme Pizza",
    "Images\\pizza\\p3.jpg",
    220,
    "Colorful mix of vegetables on tomato sauce and cheese"
  ),
  new Food(
    "Barbecue Chicken Pizza",
    "Images\\pizza\\p4.jpg",
    350,
    "Tangy barbecue sauce, grilled chicken, onions, cilantro, and cheese."
  ),
  new Food(
    "Four Cheese Pizza",
    "Images\\pizza\\p5.jpg",
    419,
    "Indulgent blend of mozzarella, parmesan, gorgonzola, and fontina."
  ),
  new Food(
    "Hawaiian Pizza",
    "Images\\pizza\\p6.jpg",
    330,
    "Controversial yet popular with ham, pineapple, tomato sauce, and cheese."
  ),
  new Food(
    "Mushroom and Truffle Oil Pizza",
    "Images\\pizza\\p7.jpg",
    280,
    "Earthy mushrooms, garlic, thyme, truffle oil, and parmesan on a thin crust."
  ),
];

const foods = {
  Biriyani: biryani,
  Chicken: chicken,
  Paneer: paneer,
  Vegetables: vegetables,
  Chinese: chinese,
  "South Indian": southIndian,
  Pizza: pizza,
};

// Generate ratings
let getRatings = (max, min) => {
  return (Math.random() * (max - min) + min).toFixed(1);
};

const postHtmlArr = Object.entries(foods)
  .map((food) => {
    let foodTemplate = food[1].map((item) => {
      let itemTemplate = `<div class="card"><button type="button"><i class="fa-solid fa-star"></i>${getRatings(
        4.9,
        3.5
      )}</button><button type="button" class="heart wishbtn" data-button-to-store="item-${
        item["name"]
      }"><i class="fa-regular fa-heart"></i></button><div class="circular--portrait"><img src="${
        item["url"]
      }" alt="" width="150" height="150"></div><h3 class='foodItem' id = "item-${
        item["name"]
      }" >${item["name"]}</h3><p>${
        item["details"]
      }</p><p class="price">Price : ₹ ${
        item["price"]
      }</p> <div class="btn"><button type="button" class="wishbtn" data-button-to-store="item-${
        item["name"]
      }">Add to wishlist</button> <button type="button" class="cartbtn" data-button-to-store="item-${
        item["name"]
      }">Add to cart</button></div></div>`;

      return itemTemplate;
    });
    // console.log(food[0].toLowerCase().replaceAll(' ',''));
    return `<div class="foodSec" id="${food[0]
      .toLowerCase()
      .replaceAll(" ", "")}"><h1 class="amaranth-regular">${
      food[0]
    }</h1><div class="card-container">${foodTemplate}</div></div>`;
  })
  .join()
  .replace(/,/g, "");

let postHTML = `${postHtmlArr}`; // remove commas;
// document.querySelector('.card-container').innerHTML = postHTML;

//export food array
export { foods, postHTML };
