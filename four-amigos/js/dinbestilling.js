document.addEventListener('DOMContentLoaded', function() {
    let removeButton1 = document.querySelector('.remove-button');
    let removeButton2 = document.querySelector('.fjern');
    let elementsToRemove = document.querySelectorAll('.afhentning-plads, .taco4stk-overskrift, .taco4stk-underskrift, .afhentning-taco, .taco4stk-pris, .betalnu, .remove-button, .fjern');
    let elementsToAdd = document.querySelector('.fjernet')

    removeButton1.addEventListener('click', function() {
        elementsToAdd.classList.add('popup');
        elementsToRemove.forEach(function(element) {
            element.remove();

        });
    });

    removeButton2.addEventListener('click', function() {
        elementsToAdd.classList.add('popup');
        elementsToRemove.forEach(function(element) {
            element.remove();

        });
    });

});