
// sezione barra di ricerca
const ricerca=document.createElement('input');
ricerca.type='text';

const lente= document.querySelector(".fa-solid fa-magnifying-glass")

function bottone_to_ricerca(event){
    console.log("ricerca attiva");

    const container=event.currentTarget;


    // container.remove("#button");

    container.appendChild(ricerca);
    // container.removeChild(lente)//lente non funziona
    container.removeEventListener("click", bottone_to_ricerca);
    container.addEventListener("dblclick", ricerca_to_bottone);
}

function ricerca_to_bottone(event){
    console.log("ritorno al default");

    const container=event.currentTarget;
    container.removeChild(ricerca);
    // container.appendChild(lente);
    container.removeEventListener("dblclick",  ricerca_to_bottone);
    container.addEventListener("click", bottone_to_ricerca);
}

const bottone = document.querySelector("#bottone_ricerca");

bottone.addEventListener('click', bottone_to_ricerca);


// sezione logo variabile

// const dice_url='https://media.tenor.com/mgLvfJ4Zk5cAAAAi/jp-jamesperrett.gif';
//non funziona come parametro?
//non funziona
function appearingGif(event){
    console.log("bravo, ci sei sopra");

    const txtonimg=event.currentTarget;
    txtonimg.style.backgroundImage="url('https://media.tenor.com/mgLvfJ4Zk5cAAAAi/jp-jamesperrett.gif')";

    txtonimg.removeEventListener("mouseover", appearingGif);
    txtonimg.addEventListener("mouseout", disappearingGif);
}

function disappearingGif(event){
    console.log("bravo, sei uscito");

    const txtonimg=event.currentTarget;
    txtonimg.style.backgroundImage="url('immagini/Logo1.png')"

    txtonimg.removeEventListener("mouseout", disappearingGif);
    txtonimg.addEventListener("mouseover", appearingGif);
}

const logo=document.querySelector("#testo-su-immagine");

logo.addEventListener("mouseover", appearingGif);


// sezione bottoni

const bottone_uno=document.querySelector("#bottone-uno");
const bottone_due=document.querySelector("#bottone-due");

bottone_uno.addEventListener("click", onClick1);
bottone_due.addEventListener("click", onClick2);

function onClick1(event){
    console.log("bottone1 attivato");

    const aux=event.currentTarget;

    const hidden=document.querySelector("#extra-uno");

    hidden.classList.remove("nascosto");
    hidden.classList.add("extra");


    bottone_uno.textContent="Clicca per comprimere:"+"<br>"+"Avventure"

    aux.removeEventListener("click", onClick1);
    aux.addEventListener("click", deOnClick1);
}

function deOnClick1(event){
    console.log("bottone1 disattivato");

    const aux=event.currentTarget;

    const hidden=document.querySelector("#extra-uno");

    hidden.classList.remove("extra");
    hidden.classList.add("nascosto");


    bottone_uno.textContent="Clicca per espandere:"+"<br>"+"Avventure"


    aux.removeEventListener("click", deOnClick1);
    aux.addEventListener("click", onClick1);
}

function onClick2(event){
    console.log("bottone2 attivato");

    const aux=event.currentTarget;

    const hidden=document.querySelector("#extra-due");

    hidden.classList.remove("nascosto");
    hidden.classList.add("extra");

    bottone_due.textContent="Clicca per comprimere:"+"<br>"+"Ambientazioni"

    aux.removeEventListener("click", onClick2);
    aux.addEventListener("click", deOnClick2);
}

function deOnClick2(event){
    console.log("bottone2 disattivato");

    const aux=event.currentTarget;

    const hidden=document.querySelector("#extra-due");

    hidden.classList.remove("extra");
    hidden.classList.add("nascosto");
    
    bottone_due.textContent="Clicca per espandere:"+"<br>"+"Ambientazioni"


    aux.removeEventListener("click", deOnClick2);
    aux.addEventListener("click", onClick2);
}


// const button_map = {
//      : 
//      vorrei creare una mappa che associ bottoni a extra (b1 con ex1...)
//      per creare solo due funzioni: onClick e deOnClick
//      al posto di averne 4...
// }


// ricardo
//https://media1.tenor.com/m/n9Hl8cEdNV4AAAAC/ricardo-milos.gif NON USARE
//https://media.giphy.com/media/IfrfAy8zbHnPfUIWki/giphy.gif?cid=790b7611prqky8etsfbeb81ye3bz4ydznxnassu6ywog3w71&ep=v1_gifs_search&rid=giphy.gif&ct=g

const ricardo_button=document.querySelector("#ricardo");
ricardo_button.addEventListener("click", ricardo_function);

const ricardo_img=document.createElement('img');
ricardo_img.setAttribute('src', 'https://media.giphy.com/media/IfrfAy8zbHnPfUIWki/giphy.gif?cid=790b7611prqky8etsfbeb81ye3bz4ydznxnassu6ywog3w71&ep=v1_gifs_search&rid=giphy.gif&ct=g')

function ricardo_function(event){
    console.log("RICARDO");

    const ricardo=event.currentTarget;

    ricardo.appendChild(ricardo_img);

    ricardo.removeEventListener("click", ricardo_function);
    ricardo.addEventListener("click", tooSexy);
}

function tooSexy(event){
    console.log("too hot to handle");

    const ricardo=event.currentTarget;

    ricardo.removeChild(ricardo_img);
    ricardo.innerHTML="";

    ricardo.removeEventListener("click", tooSexy);
    // ricardo.addEventListener("click", ricardo_function);
}