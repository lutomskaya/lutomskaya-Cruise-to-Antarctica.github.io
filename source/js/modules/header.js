import {ScrollLock} from '../utils/scroll-lock';

const mainHeader = document.querySelector('[data-main-header]');

const mainToggle = document.querySelector('[data-button]');

const mainOverlay = document.querySelector('[data-overlay]');

const mainLink = document.querySelectorAll('[data-link]');

const scrollLock = new ScrollLock();

function closeMenu() {
  mainHeader.classList.add('main-header--closed');
  mainHeader.classList.remove('main-header--opened');
  scrollLock.enableScrolling();
}

function openMenu() {
  mainHeader.classList.remove('main-header--closed');
  mainHeader.classList.add('main-header--opened');
  scrollLock.disableScrolling('.main-header');
}

function clickOverlay() {
  mainOverlay.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeMenu();
  });
}

function clickLinks() {
  mainLink.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      closeMenu();
    });
  });
}

function clickOnToggle() {

  mainHeader.classList.remove('nojs');

  mainToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (mainHeader.classList.contains('main-header--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
}

export {clickOnToggle, clickOverlay, clickLinks};
