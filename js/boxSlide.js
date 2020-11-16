const boxBtn1 = document.getElementById('boxBtn1');
const boxBtn2 = document.getElementById('boxBtn2');
const boxBtn3 = document.getElementById('boxBtn3');

// Selecting box__item class for each button
const item1 = boxBtn1.parentNode.parentNode.parentNode;
const item2 = boxBtn2.parentNode.parentNode.parentNode;
const item3 = boxBtn3.parentNode.parentNode.parentNode;

// console.log(window.getComputedStyle(item1).getPropertyValue('background-size'));

function boxSlide(item) {   
    console.log(item1.style);
}

boxBtn1.addEventListener('click', (e) => {
    e.preventDefault();
    boxSlide(item1);
});