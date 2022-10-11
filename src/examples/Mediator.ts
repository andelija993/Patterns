interface ChatMediator {
	sendMessage(msg : string, user : User) : void;

	addUser(user : User) : void;
}

class MediatorChat implements ChatMediator {
    users : User[] = [];

	public addUser(user : User) : void {
		this.users.push(user);
	}
	
	public sendMessage(message : string, user : User) : void {
		for (let i = 0; i < this.users.length; i++) {
			if(this.users[i] != user){
				this.users[i].receive(message);
			}
		}
	}
}

interface Chat {
    send(msg: string, user: User): void;
}

abstract class User {
    chatMediator : ChatMediator;
    name : string;

    constructor(chatMediator: ChatMediator, name : string) {
        this.chatMediator = chatMediator;
        this.name = name;
    }

    public abstract send(message: string): void;

    public abstract receive(message: string): void;
}

class User1 extends User {
    constructor(chatMediator: ChatMediator, name : string) {
        super(chatMediator, name);
    }

    public send(message: string): void {
        console.log(this.name + " sending: " + message);
        this.chatMediator.sendMessage(message, this);
    }

    public receive(message: string): void {
        console.log(this.name + " received message " + message);
    }
}

let mediator : ChatMediator = new MediatorChat();
let user1 : User = new User1(mediator, "Andjelija");
let user2 : User = new User1(mediator, "Uros");
let user3 : User = new User1(mediator, "Marija");
let user4 : User = new User1(mediator, "Andjela");
mediator.addUser(user1);
mediator.addUser(user2);
mediator.addUser(user3);
mediator.addUser(user4);
user1.send("Cao svima! :)");

export{}