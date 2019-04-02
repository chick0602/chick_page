var photo1 = document.querySelector('.photo1');
var photo2 = document.querySelector('.photo2');
var photo3 = document.querySelector('.photo3');
photo1.addEventListener("click",function(){
    showImage(photo1)
    openLightbox();
})
photo2.addEventListener("click",function(){
    showImage(photo2)
    openLightbox();
})
photo3.addEventListener("click",function(){
    showImage(photo3)
    openLightbox();
})