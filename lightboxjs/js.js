var photo=[".photo1",".photo2",".photo3"];

for(var i=0; i<3; i++){
	photo=document.querySelector('photo[i]')
}

for(var i=0; i<3; i++){
	photo.addEventListener("click",function(){
		showImage(photo[i]);
		openLightbox();
})}