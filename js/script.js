import * as U from './utils.js';
import * as Fn from './functions.js';
import './hero_animation.js';

/**
 * da cambiare con la chiamata
 * https://github.com/RenatoFringuello/simple_portfolio/blob/produzione_20241101/routes/projects/projects_en.json
 *  */ 
const projectsEn = U.fetchData("http://127.0.0.1:5500/routes/projects/projects_en.json")
const contentCurrentPage = document.getElementById('content-current-page')
contentCurrentPage.innerHTML = '' 

projectsEn.then((projects) =>{
    projects.forEach(project => {

        /* links */
        let links = ``
        project.links.forEach(link =>{
            links += `<a href="${link.href}" target="_blank" class="my-card-link">${link.name}</a>`
        })

        /* card */
        const card = `
        <div class="col-12">
            <div class="card position-relative rounded-0 flex-column justify-content-between" style="height: 400px;">
                <img class="thumbnail position-absolute" src="${project.thumbnail}" alt="${project.title} thumbnail"/>
                <div class="card-body position-relative">
                    <h5 class="card-title">${project.title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${project.subtitle}</h6>
                </div>
                <div class="bottom p-3 position-relative">
                    <p class="card-text">${project.description}</p>
                    ${links}
                </div>
            </div>
        </div>`

        contentCurrentPage.innerHTML += card
    });
})

Fn.injectCredits()