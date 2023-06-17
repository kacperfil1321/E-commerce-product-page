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
});

document.getElementById('previous').addEventListener('click', function (){
    if(image == 1){
        image = 4;
    }
    else{
        image--;
    }
    switchGalleryImage(image);
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