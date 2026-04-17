class Car {

    private model:string;
    private brand:string;
    private speed:number;

    constructor(brand: string, model:string){
        this.brand = brand;
        this.model = model;
        this.speed = 0;
    }

    accerlerator(increment:number):void{
        this.speed += increment;
    }

    displayData():void{
        console.log(`Car brand ${this.brand} and model ${this.model} ${this.speed}`)
    }
}

function main():void{

    const corrollo = new Car("Toyota", "mustang");
    const mustang = new Car("Ford", "Mustang");

    corrollo.accerlerator(10);

    corrollo.displayData()
}

main();


// //till above we see how to defined a 

class Mobile {
    //properties
    private brand:string;
    private price:number;
    private battery:number;

    constructor(brand:string, price:number, battery:number){
        this.brand = brand;
        this.price = price;
        this.battery = 50;
    }

    charge(amount:number):void{
        this.battery += amount;
        if(this.battery > 100){
            this.battery = 100;
        }
        console.log(`${this.brand} is charge battery: ${this.battery}%`)
    }

    
}