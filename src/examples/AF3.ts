//movie

interface Movie{
    genre: () =>(void)
}

class Action implements Movie {
genre(){
    console.log('Action movie');
    }
}

class Romantic implements Movie {
    genre(){
        console.log('Romantic movie');
    }
}

class Horror implements Movie {
    genre(){
        console.log('Horror movie');
    }
}

abstract class Creator {
    public abstract create(type:string):void;
}

class MovieFactory extends Creator {
    create(type:string): Action | Romantic | Horror {
        if(type === "action"){
            return new Action();
        }else if(type === 'Romantic'){
            return new Romantic();
        }else{
            return new Horror
        }
    }
}

const factory = new MovieFactory();
let TheBatman = new Action();
let Persuasion = new Romantic();
let Saw = new Horror();
TheBatman.genre();
Persuasion.genre();
Saw.genre();

export {};