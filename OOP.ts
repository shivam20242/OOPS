// class Car {

//     private model:string;
//     private brand:string;
//     private speed:number;

//     constructor(brand: string, model:string){
//         this.brand = brand;
//         this.model = model;
//         this.speed = 0;
//     }

//     accerlerator(increment:number):void{
//         this.speed += increment;
//     }

//     displayData():void{
//         console.log(`Car brand ${this.brand} and model ${this.model} ${this.speed}`)
//     }
// }

// function main():void{

//     const corrollo = new Car("Toyota", "mustang");
//     const mustang = new Car("Ford", "Mustang");

//     corrollo.accerlerator(10);

//     corrollo.displayData()
// }

// main();

// // //till above we see how to defined a

// class Mobile {
//     //properties
//     private brand:string;
//     private price:number;
//     private battery:number;

//     constructor(brand:string, price:number, battery:number){
//         this.brand = brand;
//         this.price = price;
//         this.battery = 50;
//     }

//     charge(amount:number):void{
//         this.battery += amount;
//         if(this.battery > 100){
//             this.battery = 100;
//         }
//         console.log(`${this.brand} is charge battery: ${this.battery}%`)
//     }

// }

class BankAccount {
  private accountNumber: number;
  private ownerName: string;
  private balane: number;

  constructor(accountNumber: number, ownerName: string) {
    ((this.accountNumber = accountNumber),
      (this.ownerName = ownerName),
      (this.balane = 0));
  }

  depositAmount(amount: number): void {
    if (amount > 0) {
      this.balane += amount;
    }
  }

  withdrawAmount(amount: number): void {
    if (amount > 0 && this.balane >= amount) {
      this.balane -= amount;
    } else {
      console.log("Invalid amount or have less amount");
    }
  }

  getBalance(): void {
    console.log(`${this.ownerName} account balance was ${this.balane}`);
  }
}

class Book {
  //private variable
  private title: string;
  private author: string;
  private isbn: string;
  private isAvailble: boolean;

  constructor(title: string, author: string, isbn: string) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailble = true;
  }

  borrowBook() {
    if (this.isAvailble == true) {
      this.isAvailble = false;
      return `book are buyed successfully ${this.title} and author Name ${this.author}`;
    } else {
      return `book is not available`;
    }
  }
  
  returnBook() {
    (this.isAvailble = true);
    return `successfully book are added in `;
  }

  displayInfo() {
    return `Details of Book ${this.title} , author:${this.author} , and isbn Number ${this.isbn} and available is ${this.isAvailble}`;
  }
}

function main(): void {
  // const shivam = new BankAccount(121321, "shivam");

  // shivam.depositAmount(20000);
  // shivam.getBalance();
  // shivam.withdrawAmount(10000);
  // shivam.getBalance();

  const Book1 = new Book(
    "The Pragmatic Programmer",
    "David Thomas",
    "978-0135957059",
  );
  console.log(Book1.displayInfo());
  let success = Book1.borrowBook();
  console.log(`Borrow successful: ${success}`);
  Book1.displayInfo();

  success = Book1.borrowBook();
  console.log(`Borrow successful: ${success}`);

  Book1.returnBook();
  Book1.displayInfo();
}

main();
