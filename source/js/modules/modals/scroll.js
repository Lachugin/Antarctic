const headerNav = document.querySelector('[data-nav]');
const headerLogo = document.querySelector('[data-logo]');
const headerList = document.querySelector('[data-nav-list]');
const headerBtn = document.querySelector('[data-btn]');
const headerBody = document.querySelector('[data-body]');
const headerOverplay = document.querySelector('[data-overplay]');

export const scroll = () => {
  const smoothLinks = document.querySelectorAll('.nav__item a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      headerBtn.classList.remove('header__btn--active');
      headerNav.classList.remove('nav__active');
      headerLogo.classList.remove('logo__active');
      headerList.classList.remove('nav__list--active');
      headerBody.classList.remove('body-fixed');
      headerOverplay.classList.remove('header__overplay');
      const id = smoothLink.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};
