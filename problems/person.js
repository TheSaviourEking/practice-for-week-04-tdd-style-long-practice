class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayhello() {
    return `${this.name} says hello!`
  };

  visit(otherPerson) {
    if (otherPerson instanceof Person) {
      return `${this.name} visited ${otherPerson.name}`;
    }
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj === 'object' && obj !== null) {
      let { name, age } = obj;
      if (name === undefined && age === undefined) {
        throw new TypeError('argument Object does not have a name and an age property');
      }

      this.name = name;
      this.age = age;
    }
    else {
      throw new TypeError('argument must be of type Object');
    }
  }

  tryUpdate(obj) {
    try{
      this.update(obj);
      return true;
    } catch(e) {
      return false;
    }
  }

  static greetAll(arr) {
    return arr.map(person => person.sayhello());
  }
}

module.exports = Person;
