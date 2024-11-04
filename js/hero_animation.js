import * as Fn from './functions.js'

const header = document.getElementById('header')
const scrollMax = 230
let last_animation_play = (window.scrollY > 10)
let ticking = false

let is_running = true
let img_interval;
let img_interval_time = 6000;

/****************************
 *        ANIMATION
 ****************************/
// listen to scroll event
document.addEventListener("scroll", (event) => {
    let last_position = window.scrollY;
  
    if(!ticking){
        window.requestAnimationFrame(() => {
            
            /**
             * nel caso in cui mi trovi > scrollMax:
             * - blocco l'animazione bounce
             * - se il set interval sta andando lo blocco e cancello l'interval
             */
            if(last_position > scrollMax){
                last_animation_play = true
                document.documentElement.style.setProperty('--bounce-floor', '100dvh');
                
                //rimuovo il set interval
                if(is_running){
                    clearInterval(img_interval)
                    is_running = false
                }
            }
            else{
                /**
                 * nel caso in cui mi trovi <= scrollMax:
                 * - attivo l'animazione bounce con infinite
                 * - se il set interval non sta andando lo reimposto
                 */ 

                // va lasciato qui perché il secondo listener non può reimpostare a infinite se non ci sono iterazioni
                // nell'animazion
                header.style.animationIterationCount = 'infinite';
                document.documentElement.style.setProperty('--bounce-floor', '98dvh');
                last_animation_play = false
                
                if(!is_running){
                    // cambio immagine hero ogni 6 sec
                    img_interval = setInterval(()=>{
                        Fn.changeImg()
                    }, img_interval_time)
                    is_running = true
                }
            }
        });
        ticking = true
    }
    ticking = false
});
// in ascolto sulle iterazioni dell'animazione
header.addEventListener('animationiteration', () => {
    if (last_animation_play) {
        // Imposta il conteggio delle iterazioni a 1 per terminare l'animazione alla fine dell'ultimo ciclo
        header.style.animationIterationCount = '1';
    }
});

/****************************
 *      CAMBIO HERO IMG
****************************/
img_interval = setInterval(()=>{
    Fn.changeImg()
}, img_interval_time)
