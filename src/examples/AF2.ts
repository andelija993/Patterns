//user

interface UserRights{
    onClick: () =>(void)
}

class Admin implements UserRights {
onClick(){
    console.log('I have access to all.');
    }
}

class User implements UserRights {
    onClick(){
        console.log('I have limited access.');
    }
}

abstract class Creator {
    public abstract create(type:string):void;
}

class UsersFactory extends Creator {
    create(type:string): Admin | User {
        if(type === "admin"){
            return new Admin();
        }else {
            return new User();
        }
    }
}

const factory = new UsersFactory();
let Milan = new Admin();
let Milica = new User();
Milan.onClick();
Milica.onClick();

export {};
