/*
The factory method provides a interface for create an object
that can be modifies after creation
**/

// using Class
class Alien {
  constructor(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = "alien";
  }
  fly = () => "qwrrwqr";
  sayPhrase = () => this.phrase;
}

const alien1 = new Alien("Ali", "I'm Ali the alien!");
console.log(alien1.sayPhrase());

// using factory function
function factory(name, pharse) {
  this.name = name;
  this.pharse = pharse;
  this.species = "Animal";
}

factory.prototype.fly = () => "asfasff";
const alien = new factory();
console.log(alien.fly());
