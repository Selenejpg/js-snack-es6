/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const biciCorsa =
[
    {
        nome: 'Atala',
        peso: 20,
    },
    {
        nome: 'Battaglin',
        peso: 30,
    },
    {
        nome: 'Carrera',
        peso: 10,
    },
    {
        nome: 'Lapierre',
        peso: 40,
    }
];

let arr = [];
let piccolo = biciCorsa[0];

for (let i = 0; i < biciCorsa.length; i++) {
    let x = biciCorsa[i];

    if (piccolo["peso"] > x["peso"]) {
        piccolo = x;
    }
    
}

let {nome, peso} = piccolo;
stamp.innerHTML = 
`
<div>nome => ${nome} </div>
<div>peso => ${peso} </div>
`

console.log(piccolo);