let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    cartItems.innerHTML = "";
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add("cart-item");
        li.textContent = `${item.product} - ${item.price} руб.`;
        cartItems.appendChild(li);
    });
    totalPrice.textContent = `Итоговая сумма: ${total} руб.`;
}

function toggleCart() {
    const cart = document.querySelector('.cart');
    cart.classList.toggle('open');
}

document.body.addEventListener('click', (event) => {
    const cart = document.querySelector('.cart');
    const cartButton = document.querySelector('.cart-button');
    if (!cart.contains(event.target) && !cartButton.contains(event.target)) {
        cart.classList.remove('open');
    }
});

document.querySelector('.cart').addEventListener('click', (event) => {
    event.stopPropagation();
});
