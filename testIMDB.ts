import { Professional } from "./claseProfessional";
import { Movie } from "./claseMovie";
import { Imdb } from "./imdb";
let movie1: Movie = new Movie("Troya", 2004, "Estado unidense", "Accion");
let movie2:Movie = new Movie ("Se7en",1995,"Estado Unidense","Accion");
let movie3:Movie = new Movie ("El lobo de Wall Street",2013,"Estadounidense","Comedia negra, Biográfica");
let professional1 = new Professional("Brad Pitt", 58, 80, 180, false, "Americano", 2, "Actor");
let professional2 = new Professional("Leonardo Di Caprio", 47, 75, 183, false, "Americano", 1, "Actor");
let professional4 = new Professional("Morgan Freeman", 85, 79, 188, false, "Americano", 1, "Actor");
let professional5 = new Professional("David Fincher",60,82,184,false,"Americano",0,"Director");
let professional6 = new Professional("Wolfgang Petersen",81,75,178,true,"Alemán",0,"Director");
let professional7 = new Professional("Andrew Kevin Walker",57,85,182,true,"Americano",0,"Escritor");
let professional8 = new Professional("Martin Scorsese",79,72,163,false,"Americano",1,"Director");
let professional3 = new Professional("Terence Winter",62,72,169,false,"Americano",0,"Escritor");
let professional9 = new Professional("Colin Wilson",82,68,167,true,"Inglés",0,"Productor");
let professional10 = new Professional("Arnold Kopelson",83,85,176,true,"Americano",0,"Productor");


// -------------------Movie 1-----------------------
movie1.actors.push(professional1);
movie1.director.push(professional6);
movie1.writer.push(professional6);
movie1.language = "english";
movie1.plataforma = "HBO / Amazon";
movie1.isMCU = false;
movie1.mainCharacterName = "Aquiles"
movie1.producer = "Bradd Pitt , Wolfang Petersen , Colin Wilson , Gail Katz";
movie1.distributor = "Warner Bros . Pictures";


//------------------------- Movie 2-------------------
movie2.actors.push(professional1, professional4);
movie2.director.push(professional5);
movie2.writer.push(professional7);
movie2.language = "english";
movie2.plataforma = "Netflix";
movie2.isMCU = false;
movie2.mainCharacterName = "David Milles , Detective William Somerset"
movie2.producer = "Phyllis Carlyle , Stephen Brown , Anne Kopelson";
movie2.distributor = "New Line Cinema";



movie3.actors.push(professional2);
movie3.director.push(professional8);
movie3.writer.push(professional3);
movie3.language = "english";
movie3.plataforma = "Netflix";
movie3.isMCU = false;
movie3.mainCharacterName = "Mark Hanna, Donnie Azoff, Naomi Lapaglia, Jordan Belfort";
movie3.producer = "Riza Aziz, Joey McFarland, Leonardo DiCaprio, Jon Favreau, Emma Koskoff y Martin Scorsese";
movie3.distributor = "Paramount Pictures y Universal Pictures";
let movies:Movie[] = [movie1,movie2,movie3];
let imdb1:Imdb = new Imdb(movies);
let stringImdb = JSON.stringify(imdb1);
const fs = require("fs");
fs.writeFileSync('./imdbBBDD.json',stringImdb);
let imdb2:Imdb = JSON.parse(fs.readFileSync(`./imdbBBDD.json`));
console.log(imdb2);
console.log("/////////////////////////////////");
imdb1.escribirEnficheroJSON("./Pablo.json");
console.log(imdb1.obtenerInstanciaIMDB("./Pablo.json"));