const model = document.createElement('div');
model.id = 'model';
document.body.appendChild(model);

const images = document.querySelectorAll('.img');

images.forEach(image => {
    image.addEventListener('click', () => {
        model.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        img.id = 'img';
        model.appendChild(img);
        console.log(img.src);
        while (model.childElementCount > 1) {
            model.removeChild(model.firstChild);
        }
    });
});

model.addEventListener('click', () => {
    model.classList.remove('active');
});
