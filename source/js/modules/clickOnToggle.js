import { mainToggle, mainHeader } from "./header";

function clickOnToggle() {
  mainToggle.addEventListener('click', function () {
    if (mainHeader.classList.contains("main-header__nav--opened")) {
      mainHeader.classList.remove("main-header__nav--opened");
      mainHeader.classList.add("main-header__nav--closed");
    } else {
      mainHeader.classList.remove("main-header__nav--closed");
      mainHeader.classList.add("main-header__nav--opened");
    }
  });
}
