interface Employee {
    showEmployeeDetails() : void;
}

class Assistant implements Employee {
    private id : number;
    private name: string;
    private position : string;
    
    constructor(id:number, name:string, position:string) {
        this.id = id;
        this.name = name;
        this.position = position;
    }

    showEmployeeDetails() : void {
        console.log(this.id + " " + this.name)
    }
}

class Manager implements Employee {
    private id : number;
    private name: string;
    private position : string;
  
    constructor(id:number, name:string, position:string) {
        this.id = id;
        this.name = name;
        this.position = position;
    }
      
    showEmployeeDetails() : void {
        console.log(this.id + " " + this.name)
    }
}

class CompanyDirectory implements Employee {
    employees : Employee[] = [];
       
    public showEmployeeDetails() : void {
        for (let employee of this.employees) {
            employee.showEmployeeDetails();
        }
    }
       
    public addEmployee(employee : Employee) : void {
        this.employees.push(employee);
    }
       
    public removeEmployee(employee : Employee) : void {
        const index = this.employees.indexOf(employee, 0);
        if (index > -1) {
            this.employees.splice(index, 1);
        }
    }
}

let assistant1 : Assistant = new Assistant(100, "Andjelija nesic", "Personal Assistant");
let assistant2 : Assistant = new Assistant(101, "Mira Djokic", "Marketing Assistant");
let marketingDirectory : CompanyDirectory = new CompanyDirectory();
marketingDirectory.addEmployee(assistant1);
marketingDirectory.addEmployee(assistant2);
    
let manager1 : Manager = new Manager(200, "Milan Maric", "Financial Manager");
let manager2 : Manager = new Manager(201, "Nikola Stankovic", "Sales Manager");
    
let accDirectory : CompanyDirectory = new CompanyDirectory();
accDirectory.addEmployee(manager1);
accDirectory.addEmployee(manager2);

let directory : CompanyDirectory = new CompanyDirectory();
directory.addEmployee(marketingDirectory);
directory.addEmployee(accDirectory);
directory.showEmployeeDetails();
export{}