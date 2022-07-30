export const getMenu = () => {
  const headerNav = document.getElementById('header-nav');
  const headerLogo = document.getElementById('header-logo');
  const headerList = document.getElementById('header-list');
  const headerBtn = document.getElementById('header-btn');

  headerBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (!headerBtn.hasAttribute('data-btn')) {
      headerBtn.setAttribute('data-btn', 'is-open');
      headerNav.setAttribute('data-nav', 'is-open');
      headerLogo.setAttribute('data-logo', 'is-open');
      headerList.setAttribute('data-nav-list', 'is-open');
    } else {
      headerBtn.removeAttribute('data-btn');
      headerNav.removeAttribute('data-nav');
      headerLogo.removeAttribute('data-logo');
      headerList.removeAttribute('data-nav-list');
    }
  });
};


