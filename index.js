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

module.exports = {
  Person,
  Head
};
