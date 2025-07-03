import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";
const cart = [];

const myCart = [];
const myWishList = []

console.log("Welcome to Shopee Cart!");

const item1 = await createItem("Shoes", 50.99, 1);
const item2 = await createItem("Shirt", 20.00, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWishList, item2);

console.log("Shoppe Cart Total:")
await cartService.calculateTotal(myCart);
