import { Professional } from "./claseProfessional";
import { Movie } from "./claseMovie";

let movie1: Movie = new Movie("Troya", 2004, "Estado unidense", "Accion");
let movie2:Movie = new Movie ("Se7en",1995,"Estado Unidense","Accion")
let professional1 = new Professional("Brad Pitt", 58, 80, 180, false, "Americano", 2, "Actor");
let professional2 = new Professional("Leonardo Di Caprio", 47, 75, 183, false, "Americano", 1, "Actor");
let professional3 = new Professional("Scarlett Ingrid Johansson", 37, 58, 160, false, "Americana", 0, "Actriz");
let professional4 = new Professional("Morgan Freeman", 85, 79, 188, false, "Americano", 1, "Actor");

// -------------------Movie 1-----------------------
movie1.actors.push(professional1);
movie1.director.push(professional1);
movie1.writer.push(professional1);
movie1.language = "english";
movie1.plataforma = "HBO / Amazon";
movie1.isMCU = false;
movie1.mainCharacterName = "Aquiles"
movie1.producer = "Bradd Pitt , Wolfang Petersen , Colin Wilson , Gail Katz";
movie1.distributor = "Warner Bros . Pictures";


//------------------------- Movie 2-------------------
movie2.actors.push(professional1, professional4);
movie2.director.push(professional1);
movie2.writer.push(professional1);
movie2.language = "english";
movie2.plataforma = "Netflix";
movie2.isMCU = false;
movie2.mainCharacterName = "David Milles , Detective William Somerset"
movie2.producer = "Phyllis Carlyle , Stephen Brown , Anne Kopelson";
movie2.distributor = "New Line Cinema";

console.log(movie1.printAll());
console.log(movie2.printAll());