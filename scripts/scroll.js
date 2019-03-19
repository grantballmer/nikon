//target the element to click and the element to scroll to 
const websiteLink = document.querySelector('.header__website');
const websiteStart = document.querySelector('.d850__info');

const storeLink = document.querySelector('.header__store');
const storeStart = document.querySelector('.camerasPage');

function smoothScroll(element) {
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

websiteLink.addEventListener('click', () => smoothScroll(websiteStart));
storeLink.addEventListener('click', () => smoothScroll(storeStart));