// Hamburger

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar .navbar-list');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navbar-list');
    nav.classList.toggle('navbar--active');
})

//  RWD

const media = window.matchMedia("(max-width: 850px)");
media.addEventListener('change', function (media) {

    if (!media.matches) {
        nav.classList.remove('navbar--active');
        nav.classList.add('navbar-list');
        hamburger.classList.remove('hamburger--active');
    }
})

// Calculator

const calculator = document.querySelector('.calculator');

// show calculator

const bannerBtn = document.querySelector('.banner-btn');
const priceBtns = document.querySelectorAll('.price-btn');

priceBtns.forEach(function (el) {
    el.addEventListener('click', function () {
        calculator.classList.remove('closed');
        calculator.classList.add('open');
    })
})

bannerBtn.addEventListener('click', function () {
    calculator.classList.remove('closed');
    calculator.classList.add('open');
}, {
    capture: true
})

// products

const productInput = document.querySelector('.product-quantity');
const productsCalc = document.querySelector('.products .calc');
const productsSumEl = document.querySelector('.products .sum');
let productSum = 0;

productInput.addEventListener('input', function () {
    productsCalc.innerHTML = `
        ${productInput.value} * $${productsCalc.dataset.price}
    `;
    productSum = productInput.value * productsCalc.dataset.price;
    productsSumEl.innerHTML = `
            $${productSum}
        `;
})

// orders

const ordersInput = document.querySelector('.orders-quantity');
const ordersCalc = document.querySelector('.orders .calc');
const ordersSumEl = document.querySelector('.orders .sum');
let orderSum = 0;

ordersInput.addEventListener('input', function () {
    ordersCalc.innerHTML = `
        ${ordersInput.value} * $${ordersCalc.dataset.price}
    `;
    orderSum = ordersInput.value * ordersCalc.dataset.price;
    ordersSumEl.innerHTML = `
        $${orderSum}
    `;
})

// packages

const packages = document.querySelector('.packages');
const packageCalc = document.querySelector('.package .calc');
const packageSumEl = document.querySelector('.package .sum');
let packageSum = 0;

packages.addEventListener('change', function () {
    packageCalc.innerHTML = `
        ${packages.value}
    `;
    packageSum = Number(packages.selectedOptions[0].dataset.price);
    packageSumEl.innerHTML = `
        $${packageSum}
    `;
})

// accounting

const accounting = document.querySelector('#accounting');
const accountingSumEl = document.querySelector('.accounting .sum');
let accSum = 0;
accounting.addEventListener('click', function () {

    if (accounting.checked) {
        accSum = Number(accounting.dataset.price);
        accountingSumEl.innerHTML = `
             $${accounting.dataset.price}
         `
    } else {
        accSum = 0;
        accountingSumEl.innerHTML = ``;
    }
})

//  rental

const rental = document.querySelector('#rental');
const rentalSumEl = document.querySelector('.rental .sum');
let rentalSum = 0;
rental.addEventListener('click', function () {
    if (rental.checked) {
        rentalSum = Number(rental.dataset.price);
        rentalSumEl.innerHTML = `
            $${rentalSum}
        `;
    } else {
        rentalSum = 0;
        rentalSumEl.innerHTML = ``;
    }
})

// Total

const totalSum = document.querySelector('.calc-btn .total-sum');
const calcForm = document.querySelector('.calc-form');

let total = 0;

function calculateTotal(a, b, c, d, e) {
    total = a + b + c + d + e;
    totalSum.innerHTML = `
            $${total}
        `;
}

calcForm.addEventListener('change', function () {
    calculateTotal(productSum, orderSum, packageSum, accSum, rentalSum)
})

// Hide calculator

calcForm.addEventListener('submit', function (e) {
    calculator.classList.remove('open');
    calculator.classList.add('closed');
})

window.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
        calculator.classList.remove('open');
        calculator.classList.add('closed');
    }
})