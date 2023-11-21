const items = document.querySelectorAll('.item');
const totalElement = document.getElementById('cart-total');

items.forEach(item => {
    const quantityElement = item.querySelector('.item-quantity');
    const priceElement = item.querySelector('.item-price');
    const incrementButton = item.querySelector('[data-action="increment"]');
    const decrementButton = item.querySelector('[data-action="decrement"]');
    const favoriteButton = item.querySelector('.favorite-btn');
    const deleteButton = item.querySelector('.delete-btn');

    let quantity = parseInt(quantityElement.textContent);
    let price = parseFloat(priceElement.textContent.slice(1));

    incrementButton.addEventListener('click', () => {
        quantity++;
        quantityElement.textContent = quantity;
        updateTotal();
    });

    decrementButton.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotal();
        }
    });

    favoriteButton.addEventListener('click', () => {
        favoriteButton.classList.toggle('active');
    });

    deleteButton.addEventListener('click', () => {
        item.remove();
        updateTotal();
    });

    function updateTotal() {
        priceElement.textContent = '$' + (price * quantity).toFixed(2);
        let cartTotal = 0;
        items.forEach(item => {
            const itemPrice = parseFloat(item.querySelector('.item-price').textContent.slice(1));
            const itemQuantity = parseInt(item.querySelector('.item-quantity').textContent);
            cartTotal += itemPrice * itemQuantity;
        });
        totalElement.textContent = '$' + cartTotal.toFixed(2);
    }
});