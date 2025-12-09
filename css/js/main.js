// main.js — подсветка активного пункта и плавный скролл для якорей
document.addEventListener('DOMContentLoaded', () => {
// highlight nav
const page = document.body.getAttribute('data-page');
9
if (page) {
document.querySelectorAll('.nav-list a[data-link]').forEach(a => {
const href = a.getAttribute('href') || '';
if ((page === 'index' && href.includes('index.html')) ||
href.includes(page)) {
a.classList.add('active');
}
});
}
// smooth scroll for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
a.addEventListener('click', function(e){
const id = this.getAttribute('href').slice(1);
const target = document.getElementById(id);
if (target) {
e.preventDefault();
target.scrollIntoView({behavior:'smooth'});
}
})
});
});
