import { Professional } from "./claseProfessional";
import { Movie } from "./claseMovie";
const fs = require("fs");
export class Imdb{
    peliculas:Movie[];
    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }
    escribirEnficheroJSON(nombreFichero:string){
        let stringNombreFichero = JSON.stringify(this);
        fs.writeFileSync(nombreFichero,stringNombreFichero);
    }
    obtenerInstanciaIMDB(nombreFichero:string):Imdb{
        let nuevo_objeto:Imdb = JSON.parse(fs.readFileSync(nombreFichero));
        return nuevo_objeto;
    }
}