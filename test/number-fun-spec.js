// Your code here
const { expect } = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun');
// const { describe } = require('mocha');

describe('returnsThree', function () {
    it('should return 3', function () {
        expect(returnsThree()).to.equal(3);
    });
});

describe('reciprocal(num)', function () {
    const number = 3;
    const num2 = -2;

    context('when argument are between 1 and 1000000', function () {
        it('should return reciprocal of number', function () {
            expect(reciprocal(number)).to.equal(1 / 3);
            expect(reciprocal(500)).to.equal(1 / 500);
        });
    });

    context('when arguments are less than 1 or greater than 1000000', function () {
        let errorMessage = 'arguments should be between 1 and 1000000';

        it('should throw RangeError(arguments should be between 1 and 1000000)', function () {
            expect(function () { reciprocal(0) }).to.throw(RangeError, errorMessage)
            expect(function () { reciprocal(num2) }).to.throw(RangeError, errorMessage);
        });
    })
});

// expect(function () { reciprocal(0) }).to.throw(RangeError('arguments should be between 1 and 1000000'));
// expect(function () { reciprocal(0) }).to.throw(RangeError, 'arguments should be between 1 and 1000000'); // => right
