import * as U from './utils.js'

/**
 * change image for the HERO
 */
const header_img = document.querySelector('header .hero-img')
const n_imgs = 2
let i = 1
export function changeImg(){
    i += (i < n_imgs) ?1 :-i+1
    header_img.style.background = `green center / cover no-repeat url('../assets/img/hero/Treviso_${i}.jpg')`;
}

/**
 * inject credits with the year update
 */
const credits = document.getElementById('credits')
export function injectCredits(){
    const year = new Date().getFullYear()
    credits.innerHTML = `&#169 ${year} Renato Fringuello`
}