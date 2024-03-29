

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

const bottone = document.querySelector("#bottone");

bottone.addEventListener('click', bottone_to_ricerca);


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