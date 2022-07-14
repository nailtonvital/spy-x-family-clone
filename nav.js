const navBtn = document.querySelector('.menu-toggle')
const navtoggle = document.querySelector('.nav-toggle')

function show() {
    if (navtoggle.style.display === 'block') {
        navtoggle.style.display = 'none'
    } else {
        navtoggle.style.display = 'block'
    }

}

navBtn.addEventListener('click', show)