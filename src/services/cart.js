

async function addItem(userCart, item) {
    userCart.push(item);
    return userCart;
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, index) { }

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result)
}

async function displayCart(userCart) {
    console.log("Cart Items:");
    userCart.forEach((item, index) => {
        console.log(`- ${index +1}. ${item.name}: R$${item.price} x ${item.quantity} | SubTotal: R$${item.subtotal()}`);
    });
}

export {
    addItem,
    deleteItem,
    removeItem,
    displayCart,
    calculateTotal
}