//Open/close cart
var cartStatus = 0, cart = document.getElementById('insideCart');
document.getElementById('cartStatus').addEventListener('click', function (){
    if(cartStatus == 0){
        cart.style.opacity = '1';
        cartStatus = 1;
    }
    else{
        cart.style.opacity = '0';
        cartStatus = 0;
    }
});

//Add items to cart
var itemsInCart = 0;
var itemPrice = parseFloat(document.getElementById('price').innerText.slice(1)).toFixed(2);
var itemName = document.getElementById('title').innerText;

document.getElementById('addToCart').addEventListener('click', function (){
    var items = parseInt(document.getElementById('quantityValue').innerText);

    if(items > 0){
        if(itemsInCart == 0){
            itemsInCart += items;
            document.getElementById('cartContents').innerHTML = '' +
            '<div class="item">' +
            '   <img src="images/image-product-1-thumbnail.jpg" height="50px">' +
            '   <div id="itemDetails">' +
            '       <div id="itemName">' + itemName + '</div>' +
            '       <div id="itemPrice">$' + itemPrice + ' x <span id="itemsNumber">' + itemsInCart + '</span> <span id="totalPrice">$' + (itemPrice * itemsInCart).toFixed(2) + '</span></div>' +
            '   </div>' +
            '   <button onclick="removeItem()"><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg></button>' +
            '</div>';
        }
        else{
            itemsInCart += items;
            document.getElementById('itemPrice').innerHTML = '$' + itemPrice + ' x <span id="itemsNumber">' + itemsInCart + '</span> <span id="totalPrice">$' + (itemPrice * itemsInCart).toFixed(2) + '</span>';
        }
        document.getElementById('numberOfItems').innerText = itemsInCart;
    }
});

//Remove items from cart
function removeItem(){
    itemsInCart = 0;
    document.getElementById('numberOfItems').innerText = itemsInCart;
    document.getElementById('cartContents').innerHTML = 'Your cart is empty.';
}

//Switch main image
var mainImageSrc;

function switchMainImage(mainImage){
    image = mainImage;
    document.getElementById('images-side').getElementsByClassName('active')[0].classList.remove('active');
    document.getElementById('thumbnails').getElementsByTagName('img')[mainImage - 1].classList.add('active');

    switch(mainImage){
        case 1:
            mainImageSrc = 'images/image-product-1.jpg';
            break;
        case 2:
            mainImageSrc = 'images/image-product-2.jpg';
            break;
        case 3:
            mainImageSrc = 'images/image-product-3.jpg';
            break;
        case 4:
            mainImageSrc = 'images/image-product-4.jpg';
            break;
    }
    document.getElementById('mainImage').src = mainImageSrc;
    switchGalleryImage(mainImage);
}

//Gallery open/close
document.getElementById('mainImage').addEventListener('click', function (){
    document.getElementById('gallery').style.display = 'block';
});

document.getElementById('close').addEventListener('click', function (){
    document.getElementById('gallery').style.display = 'none';
});

//Gallery next/previous
var image = 1, imageSrc;

document.getElementById('next').addEventListener('click', function (){
    if(image == 4){
        image = 1;
    }
    else{
        image++;
    }
    switchGalleryImage(image);
    switchMainImage(image);
});

document.getElementById('previous').addEventListener('click', function (){
    if(image == 1){
        image = 4;
    }
    else{
        image--;
    }
    switchGalleryImage(image);
    switchMainImage(image);
});

function switchGalleryImage(img){
    document.getElementById('gallery').getElementsByClassName('active')[0].classList.remove('active');
    document.getElementById('galleryThumbnails').getElementsByTagName('img')[img - 1].classList.add('active');
    image = img;
    switch(img){
        case 1:
            imageSrc = 'images/image-product-1.jpg';
            break;
        case 2:
            imageSrc = 'images/image-product-2.jpg';
            break;
        case 3:
            imageSrc = 'images/image-product-3.jpg';
            break;
        case 4:
            imageSrc = 'images/image-product-4.jpg';
            break;
    }
    document.getElementById('galleryImage').src = imageSrc;
}

//Cart
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