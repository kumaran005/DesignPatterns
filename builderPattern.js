/**
 * The Builder pattern is used to create objects in "steps".
 */

const bug1 = {
  name: "Buggy McFly",
  phrase: "Your debugger doesn't work with me!",
};

const bug2 = {
  name: "Martiniano Buggland",
  phrase: "Can't touch this! Na na na na...",
};

// These functions take an object as parameter and add a method to them
const addFlyingAbility = (obj) => {
  obj.fly = () => console.log(`Now ${obj.name} can fly!`);
};

const addSpeechAbility = (obj) => {
  obj.saySmthg = () =>
    console.log(`${obj.name} walks the walk and talks the talk!`);
};

//  the builder functions passing the objects as parameters
addFlyingAbility(bug1);
bug1.fly();

addSpeechAbility(bug2);
bug2.saySmthg();
