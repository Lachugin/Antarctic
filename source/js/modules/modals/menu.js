export const getMenu = () => {
  const headerNav = document.querySelector('[data-nav]');
  const headerLogo = document.querySelector('[data-logo]');
  const headerList = document.querySelector('[data-nav-list]');
  const headerBtn = document.querySelector('[data-btn]');
  const headerBody = document.querySelector('[data-body]');
  const headerOverplay = document.querySelector('[data-overplay]');

  headerBtn.classList.remove('header__btn--active');
  headerNav.classList.remove('nav--is-open-no-js');
  headerNav.classList.remove('nav__active');
  headerLogo.classList.remove('logo__active');
  headerList.classList.remove('nav__list--active');

  headerBtn.addEventListener('click', function (e) {
    e.preventDefault();
    headerBtn.classList.toggle('header__btn--active');
    headerNav.classList.toggle('nav__active');
    headerLogo.classList.toggle('logo__active');
    headerList.classList.toggle('nav__list--active');
    headerBody.classList.toggle('body-fixed');
    headerOverplay.classList.toggle('header__overplay');
  });

  headerOverplay.addEventListener('click', function (b) {
    b.preventDefault();
    headerBtn.classList.toggle('header__btn--active');
    headerNav.classList.toggle('nav__active');
    headerLogo.classList.toggle('logo__active');
    headerList.classList.toggle('nav__list--active');
    headerBody.classList.toggle('body-fixed');
    headerOverplay.classList.toggle('header__overplay');
  });
};
