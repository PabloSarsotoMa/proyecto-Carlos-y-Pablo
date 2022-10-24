import { Professional } from "./claseProfessional";
import { Movie } from "./claseMovie";
export class Imdb{
    peliculas:Movie[];
    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }
}