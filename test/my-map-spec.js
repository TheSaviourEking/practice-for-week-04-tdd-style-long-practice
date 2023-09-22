// Your code here
const chai = require('chai');
const { expect } = chai;
const myMap = require('../problems/my-map');

const spies = require('chai-spies');
chai.use(spies);

describe('myMap', function () {
    let arr = [1, 2, 3];
    const callback = (el) => el * 2;

    describe('work like built in array method', function () {
        it('should accept an array as first argument', function () {
            expect(Array.isArray(arr)).to.be.true;
            expect(function () { myMap('not an array', function () { }) }).to.throw(TypeError, 'first argument must be an array');
        });
        it('should accept a function as second argument', function () {
            expect(typeof callback).to.equal('function');
            expect(function () { myMap(arr, 'not a function') }).to.throw(TypeError, 'myMap expects second argument to be a function');
        });
        it('should run the callback function on every element of inputArray', function () {
            let result = myMap(arr, callback);
            let expectedresult = [2, 4, 6];

            expect(result).to.deep.equal(expectedresult);
        })
        it('should return an array of same length as input array', function () {
            let result = myMap(arr, callback);
            expect(Array.isArray(result)).to.be.true;
            expect(arr.length).to.equal(result.length);
        });
        it('should produce same result as built in map', function () {
            let arrMapResult = arr.map(el => callback(el));
            let myMapResult = myMap(arr, callback);

            expect(myMapResult).to.deep.equal(arrMapResult);
        });
    });

    beforeEach(function () {
        arr = [1, 2, 3];
    })

    describe('myMap Advanced', function () {
        it('should not mutate input array', function () {
            let originalArray = [...arr];
            myMap(arr, callback);
            expect(arr).to.deep.equal(originalArray);
        });

        it('should not call built-in Array.map', function () {
            const mapSpy = chai.spy.on(Array.prototype, 'map');
            myMap(arr, callback);

            expect(mapSpy).to.not.have.been.called();
        });

        it('should ensure that the passed-in callback is invoked once for each element in passed-in array', function () {
            const callbackSpy = chai.spy();

            myMap(arr, callbackSpy);

            expect(callbackSpy).to.have.been.called.exactly(arr.length) // ensure it was called for each element
        });
    })
})
