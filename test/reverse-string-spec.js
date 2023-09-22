// Your code here
const { expect } = require('chai');
const reverseString = require('../problems/reverse-string');
const { Context } = require('mocha');

describe('reverseString', function () {
    const string1 = 'fun';
    const string2 = 'reversed';

    context('when input is string', function () {
        it('should return the reverse of the input string', function () {
            expect(reverseString(string1)).to.equal('nuf');
            expect(reverseString(string2)).to.equal('desrever');
        });
    });

    context('when input is not string', function () {
        it('should throw TypeError if input is not of type String', function () {
            expect(function () { reverseString(1) }).to.throw(TypeError);
        });
    });
})
