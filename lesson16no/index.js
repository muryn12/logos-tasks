let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  // let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

let playing = true;
let btnPause = document.getElementById('pause');

btnPause.onclick = function(){
    if(playing) {
      pauseSlideshow()
    }else{
      playSlideshow()
    }
}
 
function playSlideshow() {
    pauseButton.innerHTML = 'Pause';
    playing = true;
    setTimeout(showSlides, 2000)
}

function pauseSlideshow() {
  pauseButton.innerHTML = 'Play';
  playing = false;
  clearTimeout(showSlides);
}

// function set_time(){
//   setInterval(image_show, 1000)
// }

// function image_show(){
//   if(slideIndex == 1){
//     mySlides = "img/003-lmia-1000x500.jpg"
//   }
//   else if(slideIndex == 2){
//     mySlides = "img/1-10-1000x500.jpg"
//   }
// }