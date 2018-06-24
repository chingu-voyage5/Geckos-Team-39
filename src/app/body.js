// Calculate body area
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let headerHeight = header.offsetHeight;
let footerHeight = footer.offsetHeight;
let windowHeight = window.innerHeight;
let main = document.querySelector('#main');
let mainHeight = windowHeight - (headerHeight + footerHeight);
main.style.height = mainHeight + 'px';