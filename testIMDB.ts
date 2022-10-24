import { Professional } from "./claseProfessional";
import { Movie } from "./claseMovie";
import { Imdb } from "./imdb";
let movie1: Movie = new Movie("Troya", 2004, "Estado unidense", "Accion");
let movie2:Movie = new Movie ("Se7en",1995,"Estado Unidense","Accion");
let movie3:Movie = new Movie ("El lobo de Wall Street",2013,"Estadounidense","Comedia negra, Biográfica");
let movies:Movie[] = [movie1,movie2,movie3];
let imdb1:Imdb = new Imdb(movies);
let stringImdb = JSON.stringify(imdb1);

