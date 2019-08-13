let slideIndex = 0;
let arrImage = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']
if(let i = 0; i<arrImage.length; i++){
  arrImage[i]
}









// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

// let playing = true;
// let btnPause = document.getElementById('pause');

// btnPause.onclick = function () {
//   if (playing) {
//     pauseSlideshow()
//   } else {
//     playSlideshow()
//   }
// }

// function sl() {
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   slides[slideIndex].style.display = "block";
// }

// function playSlideshow() {
//   pauseButton.innerHTML = 'Pause';
//   playing = true;
//   setInterval(sl, 2000)
// }

// function pauseSlideshow() {
//   pauseButton.innerHTML = 'Play';
//   playing = false;
//   clearTimeout(showSlides);
// }

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