const simpleArray = [3, 7, 7, 15];

Array.prototype.sum = function () {
  return this.map((ite) => ite * 0);
};

console.log(simpleArray.sum());

function Con_figname(params) {
  return {
    first: "im",
    last: "dev",
    fullName: function () {
      return this.first + " " + this.last;
    },
  };
}

const callme = Con_figname();

console.log(callme.fullName());

function ConstructorFunction() {
  this.first = "1";
  this.last = "2";

  //   someMethod() {
  //     return +this.first + +this.last;
  //   }
}

const cal = new ConstructorFunction();

const proto = {
  drive() {
    console.log("Vroom!");
  },
};

console.log(proto.drive());
