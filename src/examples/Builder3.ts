class CakeBuilder {
    constructor(
     public name:string,
     public flavour:string,
     public crust:string,
     public fruit?:string[],
     public frosting?:boolean,
    ){}

    addname(name:string){
        this.name = name;
    }
    addFlavour(flavour:string){
        this.flavour = flavour;
    }

    addCrust(crust:string){
        this.crust = crust;
    }
    addFruit(fruit:string[]){
        this.fruit = fruit;
    }
    addFrosting(frosting:boolean){
        this.frosting = frosting;
    }
}

let CustomerMira = new CakeBuilder('Moscow Cake','Vanilla and fruits','Hazelnut crust',["cherry","ananas","peach"],true);
let CustomerJoca = new CakeBuilder('Chocolate cake', 'chocolate', '')

console.log(CustomerJoca.name);

export{}