// Singleton is a design pattern that ensures that a class has only  immutable instance.

// using object
const Config = {
  start: () => console.log("App has started"),
  update: () => console.log("App has updated"),
};

Object.freeze(Config);

Config.start();
Config.update();

Config.name = "Robert";
console.log(Config); // And verify it doesn't work: { start: [Function: start], update: [Function: update] }

// using class
class Con_fig {
  constructor() {}
  start() {
    console.log("App has started");
  }
  update() {
    console.log("App has updated");
  }
}

const instance = new Config();
Object.freeze(instance);
