// Your code here
const { expect } = require('chai');
const Person = require('../problems/person');

describe('Person', function () {
    let person1;
    let person2;

    beforeEach(function () {
        person1 = new Person('Saviour', 40);
        person2 = new Person('Mai', 37);
    })

    describe('Constructor', function () {
        it('should take a name and age and set them as properties of instance', function () {
            expect(person1.name).to.deep.equal('Saviour');
            expect(person1.age).to.deep.equal(40);
        });
    });

    describe('sayhello()', function () {
        it('should return a string of the person instance\'s name and a greeting message', function () {
            expect(person1.sayhello()).to.deep.equal(`${person1.name} says hello!`)
        });
    });

    describe('visit(otherPerson)', function () {
        it('should return a string stating that this instance visited the passed-in person', function () {
            expect(person1.visit(person2)).to.deep.equal(`${person1.name} visited ${person2.name}`);
        });
    });

    describe('switchVisit(otherPerson)', function () {
        it('should invoke the visit function with the visit function of otherPeraon on current instance as argument', function () {
            expect(person1.switchVisit(person2)).to.deep.equal(`${person2.name} visited ${person1.name}`);
        });
    });

    describe('update(obj)', function () {
        context('when argument is a valid object', function () {
            it('should update the instance properties to match the passed-in Object\'s values', function () {
                let coolPerson = {
                    name: 'lulu',
                    age: 57
                };

                person1.update(coolPerson);
                expect(person1).to.deep.equal(coolPerson);
            });

            it('should throw TypeError(argument Object does not have a name and an age property', function () {
                let newPerson = { profession: 'Professor' };
                expect(function () { person1.update(newPerson) }).to.throw(TypeError, 'argument Object does not have a name and an age property');
            });
        });
        context('when argument is not a valid object', function () {
            it('should throw TypeError(argument must be of type Object), if argument is not an object', function () {
                expect(function () { person1.update(2) }).to.throw(TypeError, 'argument must be of type Object');
            });
        });
    });

    describe('tryUpdate(obj)', function () {
        describe('call the update(obj) method with the incoming argument', function () {
            context('when the invocation of update(onj) is successful', function () {
                it('should return true if update(obj) is successful', function () {
                    let coolPerson = {
                        name: 'lulu',
                        age: 57
                    };

                    expect(person1.tryUpdate(coolPerson)).to.be.true;
                    expect(person1).to.deep.equal(coolPerson);
                });
            });

            context('when the invocation is not successful', function () {
                it('should not throw an error, but instead return false', function () {
                    expect(person1.tryUpdate(2)).to.be.false;
                    expect(person1).to.deep.equal(person1);
                });
            });
        });
    });

    describe('greetAll(arr)', function () {
        let newPerson = new Person('here', 3);
        let newPerson2 = new Person('wilbur', 34);
        const persons = Person.greetAll([newPerson, newPerson2]);

        let expectedResult = [newPerson.sayhello(), newPerson2.sayhello()];
        // console.log(newPerson)

        it('should call sayHello() on each person instance and store each returned string in an array then return the new array', function () {
            expect(persons).to.be.an.instanceOf(Array);
            expect(persons).to.deep.equal(expectedResult);
        })
    })
})
