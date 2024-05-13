// Task one
function Car(name, model, price) {
  this.n = name;
  this.m = model;
  this.p = price;
}

class Viechel {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run = () => {
    console.log("Car Is Running");
  };
  stop = () => {
    console.log("Car Is Stopped");
  };

  info = () => {
    console.log(
      `Car One name is ${this.n} and model is ${this.m} and price = ${this.p}`
    );
  };
}

let carOne = new Viechel("corolla", 2011, 4500);

carOne.info();
carOne.run();
carOne.stop();
console.log(carOne);
// Needed Output

// ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
// ("Car Is Running Now");
