baguetteBox.run('.gallery',{
    captions:true,
    buttons:'auto'
});
let slidendex=0;
let slideshowInterval;

function startSlideShow(){
    slideshowInterval=setInterval(showSlides,3000)
}

function showSlides(){
    const slides=document.querySelectorAll('.baguetteBox-gallery a');
    slides[slidendex].click();
    slidendex=(slidendex+1)%slides.length;
}

document.addEventListener('DOMContentLoaded',startSlideShow);

document.addEventListener('baguetteBox:beforeShow',()=>{
    clearInterval(slideshowInterval);
});

document.addEventListener('baguetteBox:afterShow',()=>{
    startSlideShow();
});