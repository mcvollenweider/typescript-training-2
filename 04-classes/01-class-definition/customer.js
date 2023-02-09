var Customer = /** @class */ (function () {
    //define a constructor
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
/*create an instance

let myCustomer = new Customer();

myCustomer.firstName='Christian'
myCustomer.lastName='Voll'

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
*/
//create an instance w/constructor
var myCustomer = new Customer('Christian', 'Voll');
console.log(myCustomer);
