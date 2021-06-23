export class Persona {
    id:number;
    nombre:string;
    apellido:string;
    
    constructor(){
        this.id=Math.round(Math.random()*50);
        // console.log(this.id);
    }
}