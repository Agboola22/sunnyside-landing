const burger = document.querySelector('#burger');

const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const arrow = document.querySelector('#arrow');
const img1 = document.querySelector('#hov-img1');
const img2 = document.querySelector('#hov-img2');
const div1 = document.querySelector('#hov-div1');
const div2 = document.querySelector('#hov-div2');

burger.addEventListener('click', function () {
	menu.classList.remove('hidden');
	menu.classList.add('flex');
	arrow.classList.add('hidden');
});
close.addEventListener('click', function () {
	menu.classList.add('hidden');
	arrow.classList.remove('hidden');
});

img1.addEventListener('click', function () {
	div1.classList.remove('hidden');
	div1.style.transform = 'translateY(-5rem)';
});
img1.addEventListener('mouseleave', function () {
	div1.classList.add('hidden');
	div1.style.transform = 'translateY(0)';
});
img2.addEventListener('mouseover', function () {
	div2.classList.remove('hidden');
	div2.style.transform = 'translateY(-5rem)';
});
img2.addEventListener('mouseleave', function () {
	div2.classList.add('hidden');
	div2.style.transform = 'translateY(0)';
});
