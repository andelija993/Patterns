//animals

interface Animal{
    onClick: () =>(void)
}

class Dog implements Animal {
onClick(){
    console.log('I bark.');
    }
}

class Cat implements Animal {
    onClick(){
        console.log('I meow.');
    }
}

abstract class Creator {
    public abstract create(type:string):void;
}

class AnimalFactory extends Creator {
    create(type:string): Cat | Dog {
        if(type === "cat"){
            return new Cat();
        }else {
            return new Dog();
        }
    }
}

const factory = new AnimalFactory();
let Dzeki = new Dog();
let Sofronije = new Cat();
Dzeki.onClick();
Sofronije.onClick();

export {};



