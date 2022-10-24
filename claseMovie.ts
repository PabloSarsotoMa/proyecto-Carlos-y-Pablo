import { Professional } from "./claseProfessional";
export class Movie {
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public director: Professional[];
    public writer: Professional[];
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    constructor(title: string, releaseYear: number, nacionality: string, genre: string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.writer = [];
        this.director = [];
        this.language;
        this.plataforma;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.actors = [];


    }

    // public setTitle(title: string) {
    //     this.title = title;
    //     return title;
    // }

    // public getTitle() {
    //     return this.title
    // }

    // public setReleaseYear(releaseYear: number) {
    //     this.releaseYear = releaseYear
    //     return releaseYear;
    // }

    // public getReleaseYear() {
    //     return this.releaseYear;
    // }

    // public setActors(actors: Professional[]) {
    //     this.actors = actors;
    //     return actors;
    // }
    // public getActors() {
    //     return this.actors
    // }

    // public setNacionality(nacionality: string) {
    //     this.nacionality = nacionality
    //     return nacionality;
    // }

    // public getNacionality() {
    //     return this.nacionality
    // }

    // public setDirector(director: Professional) {
    //     this.director = director;
    //     return director

    // }
    // public getDirector() {
    //     return this.director
    // }
    // public setWriter(writer: Professional) {
    //     this.writer = writer
    //     return writer
    // }
    // public getWriter() {
    //     return this.writer
    // }

    // public setLanguage(languaje: string) {
    //     this.language = languaje;
    //     return languaje;
    // }
    // public getLanguage() {
    //     return this.language
    // }

    // public setPlataforma(plataforma: string) {
    //     this.plataforma = plataforma;
    //     return plataforma;
    // }

    // public getPlataforma() {
    //     return this.plataforma
    // }

    // public setIsMCU(isMCU: boolean) {
    //     this.isMCU = isMCU
    //     return isMCU
    // }
    // public getIsMCU() {
    //     return this.isMCU
    // }
    // public setMainCharacterName(mainCharacterName: string) {
    //     this.mainCharacterName = mainCharacterName;
    //     return mainCharacterName
    // }
    // public getMainCharacterName() {
    //     return this.getMainCharacterName
    // }
    // public setProducer(producer: string) {
    //     this.producer = producer;
    //     return producer
    // }
    // public getProducer() {
    //     return this.producer
    // }

    // public setDistributor(distributor: string) {
    //     this.distributor = distributor
    //     return distributor;
    // }
    // public getDistributor() {
    //     return this.distributor
    // }
    // public setGenre(genre: string) {
    //     this.genre = genre
    //     return genre
    // }
    // public getGenre() {
    //     return this.genre
    // }
    printAll() {
        console.log(this);

    }


    // showMyResults() {
    //     console.log(this.title);
    //     console.log(this.releaseYear);
    //     console.log(this.actors);
    //     console.log(this.nacionality);
    //     console.log(this.director);
    //     console.log(this.writer);
    //     console.log(this.language);
    //     console.log(this.plataforma);
    //     console.log(this.isMCU);
    //     console.log(this.mainCharacterName);
    //     console.log(this.producer);
    //     console.log(this.distributor);
    //     console.log(this.genre);

    // };

}



