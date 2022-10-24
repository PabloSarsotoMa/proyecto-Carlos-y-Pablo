export class Professional{
    name:string;
    age:number;
    weight:number;
    height:number;
    isRetired:boolean;
    nationality:string;
    oscarsNumber:number;
    profession:string;
    constructor(name:string,age:number,weight:number,height:number,isRetired:boolean,nationality:string,oscarsNumber:number,profession:string){
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    printAll(){
        console.log(this);
    }

}