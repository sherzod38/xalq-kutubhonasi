var personCardIcon = document. querySelectorAll( '.btn' );


function allClassRemover(clickedElement) {

 personCardIcon.forEach(btn =>{
   if (btn.dataset.btnOrder != clickedElement.dataset.btnOrder) {
     btn.classList. remove( 'opened');
   }

 })
}

personCardIcon. forEach( (btn, index) => {
   btn.addEventListener('click', function(e) {
    e.preventDefault();
      allClassRemover(btn);
       if(index == btn.dataset.btnOrder) {
         btn.classList.toggle('opened');
        
       }
  })
});
