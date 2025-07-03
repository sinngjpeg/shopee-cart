import createItem from "./services/item.js";

const cart = [];

console.log("Welcome to Shopee Cart!");

const item1 = await createItem("Shoes", 50.99, 1);
const item2 = await createItem("Shirt", 20.00, 3);

console.log(item1.subtotal()); // 50.99
