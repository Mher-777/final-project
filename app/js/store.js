if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem)
    }

    let quantityInputs = document.getElementsByClassName('cart-product__quantity-number');
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal()
}

function quantityChanged(event) {
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal() {
    let carItemContainer = document.getElementsByClassName('cart-products__wrapper')[0];
    let cartRows = carItemContainer.getElementsByClassName('cart-product');
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('total-price')[0];
        let quantityElement = cartRow.getElementsByClassName('cart-product__quantity-number')[0];
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        let quantity = quantityElement.value;
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('sub-price')[0].innerText = total + "$";
    document.getElementsByClassName('grand-price')[0].innerText = total + "$";
}

