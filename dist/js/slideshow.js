
// -------------------------------------------------------------- SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow__item");
  var dots = document.getElementsByClassName("slideshow__dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// -------------------------------------------------------------- MODAL 
const slideshow = document.querySelector('.slideshow');
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.slideshow__close');

modalBtn.addEventListener('click', () => {
    slideshow.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    slideshow.style.display = 'none';
});

// CLOSE BUTTON OUTSIDE OF THE MODAL
window.addEventListener('click', (e) => {
    if(e.target.classList.contains('slideshow')) {
        e.target.style.display = 'none';
    }
});

// ESCAPE BUTTON TO CLOSE MODAL
window.addEventListener('keyup', (e) => {
    if(e.keyCode == 27) {
        slideshow.style.display = 'none';
    }
})
