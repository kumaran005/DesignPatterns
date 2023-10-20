/**
 * The Prototype pattern is to create an object using another object as a blueprint,
 * inheriting its properties and methods.
 */

const enemy = {
  attack: () => console.log("Pim Pam Pum!"),
  flyAway: () => console.log("Flyyyy like an eagle!"),
};

// another object that will inherit from  prototype
const bug1 = {
  name: "Buggy McFly",
  phrase: "Your debugger doesn't work with me!",
};

// With setPrototypeOf  set the prototype of  object
Object.setPrototypeOf(bug1, enemy);

console.log(bug1);
// With getPrototypeOf  read the prototype and confirm the previous has worked
console.log(Object.getPrototypeOf(bug1)); // { attack: [Function: attack], flyAway: [Function: flyAway] }

console.log(bug1.phrase); // Your debugger doesn't work with me!
bug1.attack(); // Pim Pam Pum!
bug1.flyAway(); // Flyyyy like an eagle!
