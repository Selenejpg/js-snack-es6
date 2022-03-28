//Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

//Dati due numeri min e max (min più piccolo di max).
let min = 0;
let max = 5;

let arrayVuoto = [];

//Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
myArray.forEach(
    (elements, index) => {
        if (index > min && index < max) {
            console.log(elements);
        }
        
    }

)