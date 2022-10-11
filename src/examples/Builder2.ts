class ApartmentBuilder {
    constructor(
     public apartmentSize:number,
     public kitchen:number,
     public bathroom:number,
     public livingRoom:number,
     public bedroom?:number,
     public terrace?:number
    ){}

    addApartmentSize(apartmentSize:number){
        this.apartmentSize = apartmentSize;
    }
    addKitchen(kitchen:number){
        this.kitchen = kitchen;
    }

    addBathroom(bathroom:number){
        this.bathroom = bathroom;
    }
    addBedroom(bedroom:number){
        this.bedroom = bedroom;
    }
    addTerrace(terrace:number){
        this.terrace = terrace;
    }
}

let OneBedroomApartment = new ApartmentBuilder(45,10,10,20);
OneBedroomApartment.addTerrace(5);

console.log(OneBedroomApartment.kitchen);

export{}