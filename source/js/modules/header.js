import {ScrollLock} from '../utils/scroll-lock';

function clickOnToggle() {
  const mainHeader = document.querySelector('.main-header');

  const mainToggle = document.querySelector('[data-button]');

  const scrollLock = new ScrollLock();

  mainHeader.classList.remove('nojs');

  mainToggle.addEventListener('click', function () {
    if (mainHeader.classList.contains('main-header--opened')) {
      mainHeader.classList.remove('main-header--opened');
      mainHeader.classList.add('main-header--closed');
      scrollLock.enableScrolling();
    } else {
      mainHeader.classList.remove('main-header--closed');
      mainHeader.classList.add('main-header--opened');
      scrollLock.disableScrolling();
    }
  });
}

export {clickOnToggle};
