class Customer {
    firstName: string;
    lastName: string;

    //define a constructor
    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

/*create an instance

let myCustomer = new Customer();

myCustomer.firstName='Christian'
myCustomer.lastName='Voll'

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
*/

//create an instance w/constructor

let myCustomer = new Customer('Christian', 'Voll');

console.log(myCustomer);

