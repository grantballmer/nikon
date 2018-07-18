const gridBoxes = document.querySelectorAll('.grid__box');
const overlay = document.querySelector('.overlay');

function gridClickHandler() {
    let gridImg = this.querySelector('img');
    let overlayImg = overlay.querySelector('img');
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
})