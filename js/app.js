/*
Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando un array di oggetti.
Ogni elemento deve avere un titolo, una descrizione e il riferimento ad una immagine.
---------------
Le immagini devono essere 5 e nella grafica devono essere presenti:
- immagine in evidenza
- thumbnail di tutte le immagine con in evidenza l’immagine attiva
- bottone avanti e indietro
*/

// Creo un array di oggetti
// Divido gli elementi in (titolo) (descrizione) (url img)

const array = [
    {
        title: 'Svezia',
        detail: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        img:'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'
    },
    {
        title: 'Perù',
        detail: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        img:'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg'
    },
    {
        title: 'Chile',
        detail: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        img:'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c'
    },
    {
        title: 'Argentina',
        detail: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        img:'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg'
    },
    {
        title: 'Colombia',
        detail: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        img:'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop'
    }
];
console.log(array)

const container = document.querySelector('.container');

for (let object of array){
    let picture = `
    <img src="${object.img}" class="card-img-top" alt="...">
    `
    container.innerHTML += picture;
}


const slider = document.querySelector('.slider');
const thumb = document.querySelector('.thumb');


