export interface Hero{
    id: any;
    name?:string;

}


export class Hero implements Hero{
    id: any;
    name?:string;

    constructor(id:any,name:string){
        this.id = id;
        this.name = name;
    }
    
}