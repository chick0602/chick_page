var photo1 = document.querySelector('.photo1');

photo1.addEventListener("click",function(){
    showImage(photo1);
    openLightbox();

});

var photo2 = document.querySelector('.photo2');

photo2.addEventListener("click",function(){
    showImage(photo2);
    openLightbox();
})

var photo3 = document.querySelector('.photo3');

photo3.addEventListener("click",function(){
    showImage(photo3);
    openLightbox();
})