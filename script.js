var quantity = 0;

document.getElementById('plus').addEventListener('click', function (){
    quantity++;
    document.getElementById('quantityValue').innerText = quantity;
});

document.getElementById('minus').addEventListener('click', function (){
    if(quantity > 0){
        quantity--;
    }
    document.getElementById('quantityValue').innerText = quantity;
});