const main = document.querySelector('#main');

const section = main.firstElementChild;
const h2 = section.firstElementChild;
const article = h2.nextElementSibling;
const div = article.firstElementChild;

const products = div.children;
const productArray = Array.from(products);