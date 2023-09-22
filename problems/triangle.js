// Your code here
class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    hasValidsideLengths() {
        // return this.side1 + this.side2 > this.side3 ? true : false;
        if (this.side1 + this.side2 > this.side3 && this.side2 + this.side3 > this.side1 && this.side3 + this.side1 > this.side2) {
            return true;
        }

        return false;
    }

    validate() {
        return this.hasValidsideLengths() ? this.isValid = true : this.isValid = false;
    }

    static getValidTriangles(...triangles) {
        let triangleArray = triangles.filter(triangle => {
            triangle.validate();
            if (triangle.isValid) {
                return triangle;
            }
        });
        return triangleArray;
    }
}

class Scalene extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);
        this.isValidTriangle = this.hasValidsideLengths();
    }

    validate() {
        return this.isScalene() ? this.isValidScalene = true : this.isValidScalene = false;
    }

    isScalene() {
        if (this.isValidTriangle) {
            if (this.side1 !== this.side2 && this.side2 !== this.side3 && this.side3 !== this.side1) {
                return true;
            }
        }
        return false;
    }
}

class Isosceles extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);
        this.isValidTriangle = this.hasValidsideLengths();
    }

    validate() {
        return this.isIsosceles() ? this.isValidIsosceles = true : this.isValidIsosceles = false;
    }

    isIsosceles() {
        if (this.isValidTriangle) {
            if (this.side1 === this.side2 || this.side2 === this.side3 || this.side3 === this.side1) {
                return true;
            }
        }
        return false;
    }
}

// let scalene = new Scalene(3, 4, 5)
// console.log(scalene)

module.exports = { Triangle, Scalene, Isosceles }
