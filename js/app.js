const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

//Event Listener to open and close the mobile nav.
btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
})
