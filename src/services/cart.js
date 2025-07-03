

async function addItem(userCart, item){
    userCart.push(item);
    return userCart;
}

async function deleteItem(userCart, name){}
async function removeItem(userCart, index){}

async function calculateTotal(userCart){
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal
}