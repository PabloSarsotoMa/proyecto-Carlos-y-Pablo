import { Professional } from "./claseProfessional";
import { Movie } from "./claseMovie";
import { Imdb } from "./imdb";
const fs = require("fs");
let readlineSync = require("readline-sync");
let miImdb:Imdb = JSON.parse(fs.readFileSync("./imdbBBDD.json","utf8"));
let name:string = readlineSync.question("Escribe el nombre del profesional");
let age:number = parseInt(readlineSync.question("Escribe la edad del profesional"));
let weight:number = parseInt(readlineSync.question("Escribe el peso en kg. del profesional"));
let height:number = parseInt(readlineSync.question("Escribe la altura en cm. del profesional"));
let isRetired:boolean = readlineSync.question("¿Está el profesional actualmente retirado?");
let nationality:string = readlineSync.question("Escribe la nacionalidad del profesional");
let oscarsNumbers:number = parseInt(readlineSync.question("¿Cuántos premios Oscar tiene el profesional?"));
let profession:string = readlineSync.question("Escribe la profesión del profesional");

let newProfessional:Professional = new Professional(name,age,weight,height,
    isRetired,nationality,oscarsNumbers,profession);

miImdb.peliculas[0].actors.push(newProfessional);
console.log(miImdb.peliculas[0]);
