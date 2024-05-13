// Task one
function Car(name, model, price) {
  this.n = name;
  this.m = model;
  this.p = price;
}

class Vehicel {
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

let carOne = new Vehicel("corolla", 2011, 4500);

carOne.info();
carOne.run();
carOne.stop();
console.log(carOne);
// Needed Output

// ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
// ("Car Is Running Now");

// Task two

console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+");

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone {
  constructor(name, serial, price, size = "Unknown") {
    super(name, serial, price);
    this.s = size;
  }

  fullDetails = () => {
    console.log(
      `${this.name} serial is ${this.serial} and size is ${this.s}`
    );
  };
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

TabletOne.fullDetails();
// iPad Serial is 100200300 And Size Is 12.9

TabletTwo.fullDetails();
// Nokia Serial is 350450650 And Size Is 10.5

TabletThree.fullDetails();
// LG Serial is 250450650 And Size Is Unknown
