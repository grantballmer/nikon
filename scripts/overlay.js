const gridBoxes = document.querySelectorAll('.grid__box');
const overlay = document.querySelector('.overlay');
const overlayImg = overlay.querySelector('.overlay__camera');

function gridClickHandler() {
    const gridImg = this.querySelector('img');
    overlayImg.setAttribute('src', gridImg.src);
    
    if (gridImg.classList.contains('grid__lens--rotate')) {
        overlayImg.style.transform = 'rotate(180deg)';
    } else if (gridImg.classList.contains('grid__lens--rotate45')) {
        overlayImg.style.transform = 'rotate(-60deg)';
    } else {
        overlayImg.style.transform = '';
    }
    
    overlay.style.display = 'flex';

}

gridBoxes.forEach(camera => camera.addEventListener('click', gridClickHandler));

overlay.addEventListener('click', function() {
    this.style.display = 'none';
    overlayImg.setAttribute('src', '');
})