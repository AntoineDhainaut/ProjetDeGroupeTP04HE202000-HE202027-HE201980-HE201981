
let posLargeur = 0;
let posHauteur = 0;
let largeur = +prompt("entrer la largeur du tableau");
let hauteur = +prompt("entrer la hauteur du tableau");
const tableau = new Array(hauteur).fill(0).map(() => new Array(largeur).fill(0));

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

let posBombeL = getRandomIntInclusive(0, largeur);
let posBombeH = getRandomIntInclusive(0, hauteur);

tableau[posBombeH][posBombeL] = 1;

function flecheUP (){
    if (posHauteur === hauteur){}
    else {posHauteur = posHauteur+1;}
    if (tableau[posLargeur][posHauteur] === 1){alert("bombe trouvée en "+posLargeur+" "+posHauteur+"! bien joué!");}
}

function flecheDOWN (){
    if (posHauteur === 0){}
    else {posHauteur = posHauteur-1;}
    if (tableau[posLargeur][posHauteur] === 1){alert("bombe trouvée en "+posLargeur+" "+posHauteur+"! bien joué!");}
}

function flecheRIGHT (){
    if (posLargeur === largeur){}
    else {posLargeur = posLargeur+1;}
    if (tableau[posLargeur][posHauteur] === 1){alert("bombe trouvée en "+posLargeur+" "+posHauteur+"! bien joué!");}
}

function flecheLEFT (){
    if (posLargeur === 0){}
    else {posLargeur = posLargeur-1;}
    if (tableau[posLargeur][posHauteur] === 1){alert("bombe trouvée en "+posLargeur+" "+posHauteur+"! bien joué!");}
}