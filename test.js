const expect = require('chai').expect;
const Person = require('./index').Person;
const Head = require('./index.js').Head;

describe('person', () => {
  describe('constructor', () => {
    it('should set the name', () => {
      const andy = new Person('Andy', 25);
      expect(andy.name).to.equal('Andy');
    });
    it('should set eyeball count', function() {
      const testPerson = new Person('eyeballs', 25);
      expect(testPerson.eyeballs).to.equal(25);
    });
    it('should test the head', function() {
      const headTestingYo = new Person('headTest', 25);
      expect(headTestingYo.head).to.exist;
      expect(headTestingYo.head).to.be.instanceOf(Head);
    });
    it('should throw err if you pass a string to eyeballs', function() {
      var testError;
      try {
        const stringPassedToHead = new Person('String to head', 'String that will throw error');
      } catch(error){
        testError = error;
      }
      expect(testError).to.exist;
    });
  });
  describe('double eyes method', function() {
    it('should double the eyes', function() {
      const eyeDoubling = new Person('eyes doubled', 2);
      expect(eyeDoubling.doubleEyes()).to.equal(4);
    });
    it('should equal 0 when multiplying by 0', function() {
      const eyesToNone = new Person('eyes will be 0', 0);
      expect(eyesToNone.doubleEyes()).to.equal(0);
    });
  });
  describe('half eyes method', function() {
    it('should pass an error if anything but a number is passed into the eye value', function() {
      var testError;
      const eyeHalving = new Person('anything but a number passed into halfeyes method', 4);
      try {
        eyeHalving.halfEyes('qwerty');
      } catch(err) {
        testError = err;
      }
      expect(testError).to.exist;
    });
    it('should actually halve a number', function() {
      const eyesBy2 = new Person('Numerical value to be divided by 2', 4);
      eyesBy2.halfEyes(4);
      expect(eyesBy2.eyeballs).to.equal(2);
    });
    it('should round down if there is half an eye', function() {
      const eyesBy2 = new Person('Numerical value to be divided by 2', 4);
      eyesBy2.halfEyes(5);
      expect(eyesBy2.eyeballs).to.equal(2);
    });
    it('should throw an error if 0 is passed in', function() {
      var testError;
      const eyesBy2 = new Person('0 to be divided by 2', 0);
      try {
        eyesBy2.halfEyes(0);
      } catch(err) {
        testError = err;
      }
      expect(testError).to.exist;
    });
    it('should throw an error if a negative number is passed in', function() {
      var testError;
      const eyesBy2 = new Person('Numerical value to be divided by 2', -4);
      try {
        eyesBy2.halfEyes(-4);
      } catch(err) {
        testError = err;
      }
      expect(testError).to.exist;
    });
  });

});
