
class Invoice {
    constructor(
     public purpose:string,
     public companyInformations:string[],
     public totalBill:number,
     public date?:string,
    ){}

    addPurpose(purpose:string){
        this.purpose = purpose;
    }

    addInfo(companyInformations:string[]){
        this.companyInformations = companyInformations;
    }

    addDate(date:string){
        this.date = date;
        return this
    }

    addTotalBill(totalBill:number){
        this.totalBill = totalBill;
        return totalBill
    }
}

let myInvoice = new Invoice("Laptop", ['Prodyna', 'Stojana Novaka', 'Beograd'], 23);
myInvoice.addDate("25.8.2022.");

console.log(myInvoice.companyInformations);

export{}