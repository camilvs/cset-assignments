class Matrix2x2 {
    constructor(values) {
        if (values.length !== 4) {
            throw new Error("Matrix must have exactly 4 values.");
        }
        this.values = values;
    }

    get(x, y) {
        return this.values[x * 2 + y];
    }

    add(other) {
        if (!(other instanceof Matrix2x2)) {
            throw new Error("Argument must be an instance of Matrix2x2.");
        }
        return new Matrix2x2(this.values.map((value, index) => value + other.values[index]));
    }

    subtract(other) {
        if (!(other instanceof Matrix2x2)) {
            throw new Error("Argument must be an instance of Matrix2x2.");
        }
        return new Matrix2x2(this.values.map((value, index) => value - other.values[index]));
    }

    scalarMultiply(scalar) {
        return new Matrix2x2(this.values.map(value => value * scalar));
    }

    determinant() {
        return this.get(0, 0) * this.get(1, 1) - this.get(0, 1) * this.get(1, 0);
    }

    inverse() {
        const det = this.determinant();
        if (det === 0) throw new Error("Matrix is not invertible.");
        return new Matrix2x2([
            this.get(1, 1) / det,
            -this.get(0, 1) / det,
            -this.get(1, 0) / det,
            this.get(0, 0) / det,
        ]);
    }

    multiply(other) {
        if (!(other instanceof Matrix2x2)) {
            throw new Error("Argument must be an instance of Matrix2x2.");
        }
        const newValues = [
            this.get(0, 0) * other.get(0, 0) + this.get(0, 1) * other.get(1, 0),
            this.get(0, 0) * other.get(0, 1) + this.get(0, 1) * other.get(1, 1),
            this.get(1, 0) * other.get(0, 0) + this.get(1, 1) * other.get(1, 0),
            this.get(1, 0) * other.get(0, 1) + this.get(1, 1) * other.get(1, 1),
        ];
        return new Matrix2x2(newValues);
    }

    toString() {
        return `[[${this.get(0, 0)}, ${this.get(0, 1)}],\n [${this.get(1, 0)}, ${this.get(1, 1)}]]`;
    }
}

// show Usage
const matrix1 = new Matrix2x2([1, 2, 3, 4]);
const matrix2 = new Matrix2x2([5, 6, 7, 8]);

console.log('Matrix 1:');
console.log(matrix1.toString());

console.log('Matrix 2:');
console.log(matrix2.toString());

// show operations
const addedMatrix = matrix1.add(matrix2);
console.log('Added Matrix:');
console.log(addedMatrix.toString());

const scalarMatrix = matrix1.scalarMultiply(2);
console.log('Scalar Multiplication:');
console.log(scalarMatrix.toString());

const determinant = matrix1.determinant();
console.log('Determinant:', determinant);

const inverseMatrix = matrix1.inverse();
console.log('Inverse Matrix:');
console.log(inverseMatrix.toString());

// Matrix multiplication
const multipliedMatrix = matrix1.multiply(matrix2);
console.log('Multiplied Matrix:');
console.log(multipliedMatrix.toString());
