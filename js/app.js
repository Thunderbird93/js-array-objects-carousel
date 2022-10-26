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
        img:'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'
    },
    {
        title: 'Chile',
        detail: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        img:'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'
    },
    {
        title: 'Argentina',
        detail: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        img:'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'
    },
    {
        title: 'Colombia',
        detail: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        img:'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'
    }
];
console.log(array)
console.log(array[0])
console.log(array[1])

