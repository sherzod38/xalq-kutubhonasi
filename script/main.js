var iconBurger = document.querySelector('#icon__burger');
var modal = document.querySelector('#modal');
var burgerSpan1 = document.querySelector('#burger_span1');
var burgerSpan2 = document.querySelector('#burger_span2');
var burgerSpan3 = document.querySelector('#burger_span3');
var header = document.querySelector('#header_before');
var accordeonButtons = document.querySelectorAll('.section2_2__row__blocks__link-plus');
var accordeonItems = document.querySelectorAll('.section2_2__row__blocks__block__right');


function allClassesRemover(clickedButton) {
    accordeonItems.forEach((singleItem, index) => {
      if(singleItem.dataset.itemOrder != clickedButton.dataset.buttonOrder) {
        singleItem.classList.remove('active');
        accordeonButtons[index].classList.remove('opened');
      } else {
        singleItem.classList.toggle('active');
        accordeonButtons[index].classList.toggle('opened');
      }
    });
  };
  
  accordeonButtons.forEach(singleButton => {
    singleButton.addEventListener('click', function(e) {
      e.preventDefault();
      allClassesRemover(singleButton);
    })
  });

iconBurger.addEventListener('click', function() {
    this.classList.toggle('opened');
    header.classList.toggle('opened');
    modal.classList.toggle('opened');
    burgerSpan1.classList.toggle('opened');
    burgerSpan2.classList.toggle('opened');
    burgerSpan3.classList.toggle('opened');
});