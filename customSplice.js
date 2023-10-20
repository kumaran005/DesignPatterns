Array.prototype.spilceIt = function (position, newValue) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (i >= position) {
      this[i + 1] = this[i];
      console.log(this);
      if (i === position) {
        this[i] = newValue;
      }
    }
  }
  return this;
};

const data = [32, 1, 43, 76, 87];
console.log(data.spilceIt(2, 4));
