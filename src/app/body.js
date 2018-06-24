// Calculate body area
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const headerHeight = header.offsetHeight;
const footerHeight = footer.offsetHeight;
const windowHeight = window.innerHeight;
const main = document.querySelector('#main');
const mainHeight = windowHeight - (headerHeight + footerHeight);
main.style.height = mainHeight + 'px';

// Add or remove classes depending on window size
const winWidth = window.innerWidth;
const field = document.querySelector('.field');
const vertical = document.querySelector('.is-vertical-center');
const control = document.querySelectorAll('.control');
if (winWidth < 640) {
    field.classList.add('is-grouped', 'is-grouped-multiline');
    field.classList.remove('has-addons', 'has-addons-centered');
    vertical.classList.remove('is-vertical-center');
    for (var each of control) {
        each.classList.add('is-expanded');
        each.firstElementChild.classList.add('is-fullwidth');
    }
}