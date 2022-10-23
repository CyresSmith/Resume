let goTop = document.querySelector('.scroll-up-btn');

window.addEventListener('scroll', trackScroll);

function trackScroll() {
    let scroll = window.pageYOffset;

    if (scroll > 300) {
      goTop.classList.remove('scroll-up-btn--remove');
    }
    if (scroll < 300) {
        goTop.classList.add('scroll-up-btn--remove');
    }
}
