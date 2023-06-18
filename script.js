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
document.getElementById('addToCart').addEventListener('click', function (){
    itemsInCart =+ parseInt(document.getElementById('quantityValue').innetText);
});

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