window.onload = function main(){
    // la pagina è stata caricata

    // fns
    function getNow(){
        // Ottieni la data e l'ora odierna
        let now = new Date();

        // Ottieni le componenti della data
        let year = now.getFullYear();
        let month = now.getMonth() + 1; // I mesi sono indicizzati a partire da 0
        let day = now.getDate();

        // Ottieni le componenti dell'ora
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        // Formatta la data e l'ora in modo leggibile
        let formattedDate = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
        let formattedTime = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);

        // Combina la data e l'ora
        let formattedDateTime = formattedDate + ' ' + formattedTime;

        return formattedDateTime; // Esempio di output: "2024-07-19 14:45:30"
    }

    /*
        variables
    */ 
    const credits = document.getElementById("credits")
    const storico_timbrature = document.getElementById("lista-storico-timbrature")
    const btn_movimento = document.querySelectorAll(".btn-movimento")
    // const btn_uscita = document.getElementById("btn-uscita")

    // imposto l'anno del credits
    credits.innerText += " " + new Date().getFullYear()

    btn_movimento.forEach((btn) =>{
        btn.addEventListener("click", function(){
            // recupero la classe da mettere nel li in base al pulsante cliccato
            let li_class = btn.children[0].classList.contains('fa-play') ?'entrata' :'uscita'
            // recupera la data e ora odierna
            let data_ora = getNow()
            // console.log(data_ora)
            const list_item = `
            <li class="list-item ${li_class}">
                <div class="left">
                    <div class="nome">RENATO</div>
                    <div class="data-ora">${data_ora}</div>
                </div>
                <div class="right">
                    <div class="btn-delete"><i class="fa-solid fa-trash"></i></div>
                </div>
            </li>`

            // append
            storico_timbrature.innerHTML += list_item

            const btns_delete = document.querySelectorAll(".btn-delete")
            console.log(btns_delete)
            btns_delete.forEach((btn)=>{
                btn.addEventListener('click', function removeLi(){
                    const parent = this.parentElement.parentElement
                    this.removeEventListener('click', removeLi)
                    parent.remove()
                    console.clear()
                    console.log(btns_delete)
                })
            })
        })
    })
}