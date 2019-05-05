export class Hero {
    private static idCounter = 1;
    private id: number;
    private name : string;

    constructor(hName: string){
        this.id = Hero.idCounter++;
        this.name = hName;
    }

    get ID():number{
        return this.id;
    }

    set ID(value: number){
        this.id = value;
    }

    get Name(){        
        return this.name;
    }

    set Name(value: string){
        this.name = value;
    }
}