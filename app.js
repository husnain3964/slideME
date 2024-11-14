// modal

let modal = document.createElement("div");
let paragraph = document.createElement("p");
let btn = document.createElement("button");
paragraph.classList.add("text");
btn.classList.add("delbtn");
let text =
  "Hello and welcome! Our kitchen is ready to delight your taste buds. Take a look at our menu and treat yourself to something special!";
paragraph.textContent = text;
btn.textContent = "close";
modal.appendChild(paragraph);
modal.appendChild(btn);
document.querySelector(".products").appendChild(modal);

modal.classList.add("modal");

btn.addEventListener("click", () => {
  modal.classList.remove("modal");
  modal.style.display = "none";
});

let slideME = document.querySelector(".folders");
let slideBtn = document.querySelector(".color");

slideBtn.addEventListener("click", () => {
  if (
    slideME.classList.contains("hide") ||
    slideME.classList.contains("close")
  ) {
    // console.log("hello");
    slideME.classList.remove("close");
    slideME.classList.remove("hide");
    slideME.classList.add("sliding");
  } else {
    slideME.classList.remove("sliding");
    slideME.classList.add("close");
  }
});

// object

const foodCardsData = [
  {
    id: 1,
    image: "./assets/f1.jpg",
    title: "Pizza",
    description: "A delicious cheesy pizza with tomato, olives, and mushrooms.",
    buttonText: "Order Now",
    keysValues: "fastFood",
  },
  {
    id: 2,
    image: "./assets/f2.jpg",
    title: "Burger",
    description: "A classic beef burger with lettuce, tomato, and cheese.",
    buttonText: "Order Now",
    keysValues: "fastFood",
  },
  {
    id: 3,
    image: "./assets/f3.jpg",
    title: "Pasta",
    description: "Pasta with a rich creamy Alfredo sauce and fresh basil.",
    buttonText: "Order Now",
    keysValues: "fastFood",
  },
  {
    id: 4,
    image: "./assets/f4.jpg",
    title: "Sushi",
    description: "Fresh sushi rolls with tuna, avocado, and seaweed.",
    buttonText: "Order Now",
    keysValues: "fastFood",
  },
  {
    id: 5,
    image: "./assets/f5.jpg",
    title: "Caesar Salad",
    description:
      "Crisp romaine lettuce, Caesar dressing, and crunchy croutons.",
    buttonText: "Order Now",
    keysValues: "fastFood",
  },
  {
    id: 6,
    image: "./assets/f6.jpg",
    title: "Tacos",
    description: "Spicy chicken tacos with avocado and fresh salsa.",
    buttonText: "Order Now",
    keysValues: "fastFood",
  },
  {
    id: 7,
    image: "./assets/f7.jpg",
    title: "Grilled Steak",
    description:
      "Tender grilled steak served with mashed potatoes and steamed vegetables.",
    buttonText: "Order Now",
    keysValues: "fastFood",
  },
  {
    id: 8,
    image: "./assets/p1.jpg",
    title: "Ice Cream",
    description: "Rich and creamy vanilla ice cream with chocolate sauce.",
    buttonText: "Order Now",
    keysValues: "sweet",
  },
  {
    id: 9,
    image: "./assets/p2.jpg",
    title: "Pancakes",
    description: "Fluffy pancakes served with maple syrup and butter.",
    buttonText: "Order Now",
    keysValues: "sweet",
  },
  {
    id: 10,
    image: "./assets/p3.jpg",
    title: "sweet",
    description: "Fluffy pancakes served with maple syrup and butter.",
    buttonText: "Order Now",
    keysValues: "sweet",
  },
  {
    id: 11,
    image: "./assets/p4.jpg",
    title: "pastry",
    description: "Fluffy pancakes served with maple syrup and butter.",
    buttonText: "Order Now",
    keysValues: "sweet",
  },
  {
    id: 12,
    image: "./assets/bb1.jpg",
    title: "bbq",
    description: " bbq is the taste of mouth",
    buttonText: "Order Now",
    keysValues: "bbq",
  },
  {
    id: 12,
    image: "./assets/bb2.jpg",
    title: "bbq chicken",
    description: " bbq is the taste of mouth",
    buttonText: "Order Now",
    keysValues: "bbq",
  },
  {
    id: 12,
    image: "./assets/bb3.jpg",
    title: "bbq  beef",
    description: " bbq is the taste of mouth",
    buttonText: "Order Now",
    keysValues: "bbq",
  },
  {
    id: 12,
    image: "./assets/bb4.jpg",
    title: "bbq mutton",
    description: " bbq is the taste of mouth",
    buttonText: "Order Now",
    keysValues: "bbq",
  },
  {
    id: 12,
    image: "./assets/bb4.jpg",
    title: "bbq kabab",
    description: " bbq is the taste of mouth",
    buttonText: "Order Now",
    keysValues: "bbq",
  },
  {
    id: 12,
    image: "./assets/bb5.jpg",
    title: "bbq special",
    description: " bbq is the taste of mouth",
    buttonText: "Order Now",
    keysValues: "bbq",
  },

];

// // object

// // collect btn

let fastFood = document.querySelector(".fastFood");
let bbq = document.querySelector(".bbq");
let platters = document.querySelector(".platter");
let Dessert = document.querySelector(".EndOfMeal");

let cardsParent = document.querySelector(".cards");

let all= document.querySelector('.all')
cardsParent.innerHTML=""
all.addEventListener('click', ()=>{
foodCardsData.forEach((food) => {
  let card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = ` <img src="${food.image}" alt="" class="img" />
<h3 class="title">${food.title}</h3>
<p class="descrip">
 ${food.description}
</p>
<button class="order">${food.buttonText}</button>`;

  cardsParent.appendChild(card);
});
})

fastFood.addEventListener("click", () => {
  cardsParent.innerHTML = "";
  foodCardsData.forEach((food) => {
    if (food.keysValues == "fastFood") {
      console.log(food.title);

      let fastFoodCard = document.createElement("div");
      fastFoodCard.classList.add("card");
      fastFoodCard.innerHTML = `<img src="${food.image}" alt="" class="img" />
       <h3 class="title">${food.title}</h3>
      <p class="descrip">
       ${food.description}
      </p>
      <button class="order">${food.buttonText}</button>`;
      cardsParent.appendChild(fastFoodCard);
    }
  });
});

bbq.addEventListener("click", () => {
  cardsParent.innerHTML = "";
  foodCardsData.forEach((food) => {
    if (food.keysValues == "bbq") {
      console.log(food.title);
      let bbqCard = document.createElement("div");
      bbqCard.classList.add("card");
      bbqCard.innerHTML = `<img src="${food.image}" alt="" class="img" />
      <h3 class="title">${food.title}</h3>
     <p class="descrip">
      ${food.description}
     </p>
     <button class="order">${food.buttonText}</button>`;

      cardsParent.appendChild(bbqCard);
    }
  });
});





Dessert.addEventListener("click", () => {
  cardsParent.innerHTML = "";
  foodCardsData.forEach((food) => {
    if (food.keysValues == "sweet") {
      console.log(food.title);
      let sweetCard = document.createElement("div");
      sweetCard.classList.add("card");
      sweetCard.innerHTML = `<img src="${food.image}" alt="" class="img" />
      <h3 class="title">${food.title}</h3>
     <p class="descrip">
      ${food.description}
     </p>
     <button class="order">${food.buttonText}</button>`;

      cardsParent.appendChild(sweetCard);
    }
  });
});






let userVal= document.querySelector('.inp')
let searchBtn = document.querySelector('.btn') 

searchBtn.addEventListener('click', ()=>{
  console.log(userVal.value);
})