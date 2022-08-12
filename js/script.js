const Btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

Btn.addEventListener('click', () => {
    Btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})