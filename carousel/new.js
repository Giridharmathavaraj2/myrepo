// var sliderPosition = 0;
// var slider = document.querySelectorAll(".slider-item");
// var totalSlider = slider.length;
// var btnPrev = document.querySelector("#btn-prev");
// var btnNext = document.querySelector("#btn-next");

// console.log(totalSlider);

// function updatePosition() {
//     slider.forEach(slide => {
//         slide.classList.remove('active');
//         slide.classList.add('hidden');
//     });
//     slider[sliderPosition].classList.add('active');
// }

// btnNext.addEventListener('click', function () {
//     NextSlide();
// });

// btnPrev.addEventListener('click', function () {
//     PrevSlide();
// });

// function NextSlide() {
//     if (sliderPosition === totalSlider - 1) {
//         sliderPosition = 0;
//     } else {
//         sliderPosition++;
//     }
//     updatePosition();
// }

// function PrevSlide() {
//     if (sliderPosition === 0) {
//         sliderPosition = totalSlider - 1;
//     } else {
//         sliderPosition--;
//     }
//     updatePosition();
// }
//  setInterval(NextSlide,5000)
