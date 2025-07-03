
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

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //2. Caso não encontre o item
    if (indexFound == -1) {
        console.log("item não encontrado");
        return;
    }

    //3. item > 1 subtrair um item
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    //4. caso item = 1 deletar o item
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
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