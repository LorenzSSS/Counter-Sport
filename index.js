let button = document.querySelector('.btn');
let counterText = document.querySelector('.counter');
let btnReset = document.querySelector('.reset');

let counter = 0;

button.addEventListener('click', function() {
    counter = counter + 1;
    counterText.innerText = counter;
});

btnReset.addEventListener('click', function() {
    counter = counter - 1;
    counterText.innerText = counter;
});

