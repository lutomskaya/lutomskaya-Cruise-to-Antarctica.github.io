function clickOnToggle() {
  const mainHeader = document.querySelector('.main-header');

  const mainToggle = document.querySelector('[data-button]');

  mainHeader.classList.remove('nojs');

  mainToggle.addEventListener('click', function () {
    if (mainHeader.classList.contains('main-header--opened')) {
      mainHeader.classList.remove('main-header--opened');
      mainHeader.classList.add('main-header--closed');
    } else {
      mainHeader.classList.remove('main-header--closed');
      mainHeader.classList.add('main-header--opened');
    }
  });
}

export {clickOnToggle};
