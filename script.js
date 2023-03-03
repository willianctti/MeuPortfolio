let text = document.querySelector('#text')
let hill4 = document.querySelector('#hill4')
let hill5 = document.querySelector('#hill5')
let planta = document.querySelector('#tree')

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px'
    hill4.style.marginTop = value * 2.5 + 'px'
    hill5.style.marginTop = value * 2.5 + 'px'
    planta.style.marginTop = value * 2.5 + 'px'
    
    if (value > 200 ) {
        text.style.display = "none";
        hill4.style.display = "none";
        hill5.style.display = "none";
        planta.style.display = "none";
    } else {
        text.style.display = "block";
        hill4.style.display = "block";
        hill5.style.display = "block";
        planta.style.display = "block";
    }
})


   


 