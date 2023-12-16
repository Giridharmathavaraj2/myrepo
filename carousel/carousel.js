let sliderPosition = 0;
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const sliderItems = document.querySelectorAll('.slider-item'); // Use querySelectorAll to get all slider items
const totalSlider = sliderItems.length;

function updatePosition() {
    sliderItems.forEach(slide => {
        slide.classList.remove('active');
        slide.classList.add('hidden');
    });
    sliderItems[sliderPosition].classList.add('active');
}

btnPrev.addEventListener('click', function () {
    PrevSlide();
});

btnNext.addEventListener('click', function () {
    NextSlide();
});

function PrevSlide() {
    if (sliderPosition == 0) {
        sliderPosition = totalSlider - 1;
    } else {
        sliderPosition--;
    }
    updatePosition();
}

function NextSlide() {
    if (sliderPosition == totalSlider - 1) {
        sliderPosition = 0;
    } else {
        sliderPosition++;
    }
    updatePosition();
}
 setInterval(NextSlide,5000)