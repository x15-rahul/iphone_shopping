function updateProductCounter(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-input');
    const productInputValue = productInput.value;
    if(isIncreasing){
        productInput.value = parseInt(productInputValue) + 1;
    } else if(productInputValue > 0){
        productInput.value = parseInt(productInputValue) - 1;
    }
    const productTotal = document.getElementById(product + '-total');
    const newProductTotal = price * parseInt(productInput.value);
    productTotal.innerText = newProductTotal;
    getTotalPrice();
}

function getTotalPrice(){
    const phoneTotal = document.getElementById('phone-total');
    const caseTotal = document.getElementById('case-total');
    const subTotal = parseInt(phoneTotal.innerText) + parseInt(caseTotal.innerText);
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('subtotal-amount').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = total;
}

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductCounter('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductCounter('phone', 1219, false);
});

document.getElementById('case-plus').addEventListener('click', function(){
    updateProductCounter('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductCounter('case', 59, false);
})