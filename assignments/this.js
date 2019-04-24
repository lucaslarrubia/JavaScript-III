/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. When in the global scope, the value of “this” will be the window/console Object which is essentially JavaScript. 
* 2. Implicit binding is the most common application of the 'this' keyword. 'This' refers to the object called before the dot in a function.
* 3. New binding is essentially creating a new object inside of a constructor function. 
* 4. Explicit binding is using methods such as .call or .apply 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function jobTitle (title) {
//     console.log(this);
//     return title;
// }
// jobTitle("Service Technician");

// Principle 2

// code example for Implicit Binding

// const newObj = {
//     greeting: 'Hi,', 
//     title: 'Service Technician',
//     sayHi: function(company) {
//         console.log(`${this.greeting} I am a ${this.title} for ${company}`);
//         console.log(this);
//     }
// };
// newObj.sayHi('Toyota');

// Principle 3

// code example for New Binding

// function NewPerson (person) {
//     this.message = 'Hi ';
//     this.person = person;
//     this.speak = function () {
//         console.log(this.message + this.person);
//         console.log(this);
//     };
// }

// const Lucas = new NewPerson('Junior');

// Lucas.speak();

// Principle 4

// code example for Explicit Binding

// Lucas.speak.call(lucas); 