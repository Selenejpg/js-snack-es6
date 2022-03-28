//Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
//1.0 Dobbiamo creare delle targhe con il loro nome in maiuscolo. 
//1.1 Ci serve quindi un nuovo array di stringhe. 
//1.2 Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
//2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
//3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];

const targheStudenti = students.map(
    (elements) => {
        return elements.name.toUpperCase();
    }
)

console.log(targheStudenti);

const arrayVoti = students.filter(
    (elements, index, array) => {
        if (elements.grades > 70) {
            return true
        }
    }
)

console.log(arrayVoti);

const arrayId = students.filter(
    (elements, index, array) => {
        if (elements.grades > 70 && elements.id > 120) {
            return true
        }
    }
)

console.log(arrayId);


