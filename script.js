let text = document.querySelector('#text')
let leaf = document.querySelector('#leaf')
let hill1 = document.querySelector('hill1')
let hill4 = document.querySelector('#hill4')
let hill5 = document.querySelector('#hill5')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px'
    hill5.style.top = value * -1.2 + 'px'
    hill5.style.left = value * 7 + 'px'
    hill4.style.left = value * -1.5 + 'px'
})