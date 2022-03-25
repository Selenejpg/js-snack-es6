/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadreCalcio =
[
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Catania',
        puntiFatti: 0,
        falliSubiti: 0,
    }
];

//generare un numero random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let l = 0; l < squadreCalcio.length; l++) {
    let puntiFatti = getRandomInt(100);
    let falliSubiti = getRandomInt(100);
    squadreCalcio[l].dati = puntiFatti;

    let {nome, dati} = squadreCalcio[l];

    stamp.innerHTML += 
    `
        <div>Nome = ${nome} </div>
        <div>Falli subiti = ${falliSubiti} </div>
        
    `
    
}