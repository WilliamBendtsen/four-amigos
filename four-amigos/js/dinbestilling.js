document.addEventListener('DOMContentLoaded', function() {
    let removeButton = document.querySelector('.remove-button');
    let elementsToRemove = document.querySelectorAll('.afhentning-plads, .taco4stk-overskrift, .taco4stk-underskrift, .afhentning-taco, .taco4stk-pris, .betalnu, .remove-button');
    let elementsToAdd = document.querySelector('.')

    removeButton.addEventListener('click', function() {
        elementsToAdd.classList.add('popup');
        elementsToRemove.forEach(function(element) {
            element.remove();

        });
    });
});