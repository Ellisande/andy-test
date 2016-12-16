'use strict';
console.log('Hello world!');

class Head {
  constructor(size, numberOfEyes) {
    this.size = size;
    this.numberOfEyes = numberOfEyes;
  }
}

class Person {
  constructor(name, eyeballs) {
    if (typeof eyeballs !== 'number') {
      throw 'Passed something that is not a number into the eyeballs value';
    }
    this.head = new Head(15, eyeballs);
    this.name = name;
    this.eyeballs = eyeballs;
  }
  doubleEyes() {
    return this.eyeballs * 2;
  }

  halfEyes(eyeVal) {
    if (typeof eyeVal !== 'number') {
      throw 'Eyeballs value passed or entered is not a number.'
    }
    if (eyeVal <= 0) {
      throw 'Person must have more than 0 eyeballs';
    }
    this.eyeballs = Math.floor(eyeVal / 2);
  }
}

class Car {
  constructor(year, make, model) {
    if (typeof year !== 'number') {
      throw 'Year must be a number!';
    }
    this.year = year;
    this.make = make;
    this.model = model;
  }
  carYear() {
    return this.year;
  }
  carMake() {
    if (make !== 'Dodge') {
      return make + ' sucks! Choose something better. :)';
    }
    return this.make;
  }
  carModel() {
    return this.model;
  }
}

//Want to go in more depth with engine. Brake down into cylinders, displacement, forced induction.
//Want to go in more depth with transmission. Break down into gear/speed count, auto or manual.

class DriveTrain {
  constructor(engine, transmission) {
    this.engine = engine;
    this.transmission = transmission;
  }

  cylinderCount() {
    return this.engine;
  }

  carTransmission(transmission) {
    if (transmission !== 'Auto' || transmission !== 'Manual') {
      throw 'Transmission must be Automatic or Manual!';
    }
    return transmission;
  }
}

module.exports = {
  Person,
  Head,
  Car,
  DriveTrain
};
