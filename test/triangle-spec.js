// Your code here
const { expect } = require('chai');
const { Triangle, Scalene, Isosceles } = require('../problems/triangle');

describe('Triangle', function () {
    let triangle, wrongTriangle;
    let side1 = 3, side2 = 4, side3 = 3;

    beforeEach(function () {
        triangle = new Triangle(side1, side2, side3);
        wrongTriangle = new Triangle(3, 3, 10);
    });

    describe('Constructor', function () {
        it('should take the length of side1, side2, and side3 and set them as properties on the instance', function () {
            expect(triangle).to.not.deep.equal(undefined, undefined, undefined);

            expect(triangle).to.deep.equal({ side1, side2, side3 });
        });
    });

    describe('getPerimeter()', function () {
        it('should return the perimeter of the Triangle instance by summing the 3 sides', function () {
            expect(triangle.getPerimeter()).to.equal(side1 + side2 + side3);
        });
    });

    describe('hasvalidSideLengths()', function () {
        it('should return true if it is a valid triangle', function () {
            expect(triangle.hasValidsideLengths()).to.be.true;
        });

        it('should return false if it is not a valid triangle', function () {
            expect(wrongTriangle.hasValidsideLengths()).to.be.false;
        });
    });

    describe('validate()', function () {
        context('should add an isValid property to the triangle instance', function () {
            it("should make triangle.isValid true if valid triangle", function () {
                triangle.validate();
                expect(triangle.isValid).to.be.true;
            });

            it('should make trangle.isvalid  false if not valid triangle', function () {
                wrongTriangle.validate();
                expect(wrongTriangle.isValid).to.be.false;
            });
        });
    });

    describe('getValidTriangles()', function () {
        it('should return all of the instances that are valid triangles', function () {
            let secondtriangle = new Triangle(4, 5, 7);
            expect(Triangle.getValidTriangles(triangle, wrongTriangle, secondtriangle)).to.deep.equal([triangle, secondtriangle]);
        });
    });
})

describe('scalene', function () {
    let scaleneTriangle, wrongScaleneTriangle;
    let side1 = 3, side2 = 4, side3 = 5;

    beforeEach(function () {
        scaleneTriangle = new Scalene(side1, side2, side3);
        wrongScaleneTriangle = new Scalene(3, 3, 3);
    })

    describe('inherits from triangle class', function () {
        it('should be instance of Triangle', function () {
            expect(scaleneTriangle).to.be.an.instanceOf(Triangle);
        });

        it('should have 3 sides length', function () {
            let { side1, side2, side3 } = scaleneTriangle;
            expect(scaleneTriangle.side1).to.deep.equal(side1);
            expect(scaleneTriangle.side2).to.deep.equal(side2);
            expect(scaleneTriangle.side3).to.deep.equal(side3);
        });

        it('should have isValidTriangle property', function () {
            expect(scaleneTriangle).to.have.a.property('isValidTriangle');
            expect(scaleneTriangle.isValidTriangle).to.be.true
        });
    });

    describe('isScalene()', function () {
        it('should return true if valid scalene triangle', function () {
            expect(scaleneTriangle.isScalene()).be.true;
        });

        it('should return false if NOT valid scalene Triangle', function () {
            expect(wrongScaleneTriangle.isScalene()).to.be.false;
        });
    });

    describe('validate()', function () {
        describe('add an isValidScalene property to the scalen triangle instance', function () {
            context('when isValidScalene', function () {
                it('should return true', function () {
                    expect(scaleneTriangle).to.not.have.a.property('isValidScalene');
                    expect(scaleneTriangle.isValidScalene).to.be.undefined;
                    scaleneTriangle.validate();
                    expect(scaleneTriangle).to.have.a.property('isValidScalene');
                    expect(scaleneTriangle.isValidScalene).to.be.true;
                });
            });

            context('when Not isValidScalene', function () {
                it('should return false', function () {
                    expect(wrongScaleneTriangle).to.not.have.a.property('isValidScalene');
                    expect(wrongScaleneTriangle.isValidScalene).to.be.undefined;
                    wrongScaleneTriangle.validate();
                    expect(wrongScaleneTriangle).to.have.a.property('isValidScalene');
                    expect(wrongScaleneTriangle.isValidScalene).to.be.false;
                });
            });
        });

        it('should have own method validate(), and not use the inherited method', function () {
            expect(Scalene.prototype.hasOwnProperty('validate')).to.be.true;
        });
    })
})

describe('Isosceles', function () {
    let isoscelesTriangle, wrongIsoscelesTriangle;
    let side1 = 3, side2 = 4, side3 = 3;

    beforeEach(function () {
        isoscelesTriangle = new Isosceles(side1, side2, side3);
        wrongIsoscelesTriangle = new Isosceles(3, 5, 7)
    })

    describe('inherits from triangle class', function () {
        it('should be instance of Triangle', function () {
            expect(isoscelesTriangle).to.be.an.instanceOf(Triangle);
        });

        it('should have 3 sides length', function () {
            let { side1, side2, side3 } = isoscelesTriangle;
            expect(isoscelesTriangle.side1).to.deep.equal(side1);
            expect(isoscelesTriangle.side2).to.deep.equal(side2);
            expect(isoscelesTriangle.side3).to.deep.equal(side3);
        });

        it('should have isValidTriangle property', function () {
            expect(isoscelesTriangle).to.have.a.property('isValidTriangle');
            expect(isoscelesTriangle.isValidTriangle).to.be.true
        });
    });

    describe('isIsoceles()', function () {
        it('should return true if valid Isosceles triangle', function () {
            expect(isoscelesTriangle.isIsosceles()).be.true;
        });

        it('should return false if NOT valid Isosceles Triangle', function () {
            expect(wrongIsoscelesTriangle.isIsosceles()).to.be.false;
        });
    });

    describe('validate()', function () {
        describe('add an isValidIsoscelse property to the Isosceles triangle instance', function () {
            context('when isValidIsosceles', function () {
                it('should return true', function () {
                    expect(isoscelesTriangle).to.not.have.a.property('isValidIsosceles');
                    expect(isoscelesTriangle.isValidScalene).to.be.undefined;
                    isoscelesTriangle.validate();
                    expect(isoscelesTriangle).to.have.a.property('isValidIsosceles');
                    expect(isoscelesTriangle.isValidIsosceles).to.be.true;
                });
            });

            context('when Not isValidIsosceles', function () {
                it('should return false', function () {
                    expect(wrongIsoscelesTriangle).to.not.have.a.property('isValidIsosceles');
                    expect(wrongIsoscelesTriangle.isValidIsosceles).to.be.undefined;
                    wrongIsoscelesTriangle.validate();
                    expect(wrongIsoscelesTriangle).to.have.a.property('isValidIsosceles');
                    expect(wrongIsoscelesTriangle.isValidIsosceles).to.be.false;
                });
            });
        });

        it('should have own method validate(), and not use the inherited method', function () {
            expect(Isosceles.prototype.hasOwnProperty('validate')).to.be.true;
        });
    })

})
