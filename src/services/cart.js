

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

async function removeItem(userCart, index) {
    const deleteIndex = index - 1; // Adjust for 0-based index
    if (index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

async function calculateTotal(userCart) {
    console.log("\nShoppe Cart Total:")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: ${result}`)
}

async function displayCart(userCart) {
    console.log("Cart Items:");
    userCart.forEach((item, index) => {
        console.log(`- ${index + 1}. ${item.name}: R$${item.price} x ${item.quantity} | SubTotal: R$${item.subtotal()}`);
    });
}

export {
    addItem,
    deleteItem,
    removeItem,
    displayCart,
    calculateTotal
}