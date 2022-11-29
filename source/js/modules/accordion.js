const accordionButton = document.querySelectorAll('[data-accordion-button]');

const initAccordion = () => {
  Array.prototype.slice.call(accordionButton).forEach((el) => {
    el.classList.remove('accordion__button--nojs');
  });
};

const toggleFooterAccordion = () => {
  for (let i = 0; i < accordionButton.length; i++) {
    accordionButton[i].addEventListener('click', function () {
      const item = accordionButton[i].nextElementSibling;
      if (item.style.maxHeight) {
        accordionButton[i].classList.remove('is-active');
        item.style.maxHeight = null;
      } else {
        Array.prototype.slice.call(accordionButton).forEach((el) => {
          el.classList.remove('is-active');
          el.nextElementSibling.style.maxHeight = null;
          accordionButton[i].classList.add('is-active');
        });
        item.style.maxHeight = item.scrollHeight + 'px';
      }
    });
  }
};

export {initAccordion, toggleFooterAccordion};
