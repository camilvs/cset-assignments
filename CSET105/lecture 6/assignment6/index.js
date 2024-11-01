// const Matrix=[
//     [1,2],
//     [3,4]
// ];
// console.log(Matrix);





// EXERCISE 1/////
class Matrix2x2{
    constructor(values){
        if (values.length !==4){
            console.log("Matrix must have 4 elements")
        }
       this.values=values;
    }
    get(x,y){

        return this.values[x*2+y];
    }
    scalarMultiply(scalar){
        return new Matrix2x2(this.values.map(val=>val*scalar));
    }

    add(Matrix){
        return new Matrix2x2(this.values.map((val,idx)=>val+Matrix2x2.values[idx]));
    }

    subtract(Matrix){
        ////
        return new Matrix2x2(this.values.map((val,idx)=>val-Matrix2x2.values[idx]));
    }

    determinant(){
        return this.get(0,0)*this.get(1,1)*this.get(0,1)*thid.get(1,0);
    }
    
    inverse(){

    }
    matrixMultiply(){

    }
    update(){

    }
    remove(){//by index
        //splice function index.1
    }
};
//for the operations the user gets to select the needed matrices from the list.

// EXERCISE 2///
//make two triangle that takes input and print the area and perimeter of the two triangles
// class point{
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }
// }
// class line {
//     constructor(start,end){
//         this.start = start;
//         this.end = end;
//     }
//     //method that return length of line
//     lengthReturn(){
//         const dx = this.end.x - this.start.x;   //horizontal distance between start and end
//         const dy= this.end.y - this.start.y;    //vertical distance between start and end
//         return Math.sqrt(dx * dx + dy* dy);     //calculates the length using the squares of the distance ^ and square root them
//     }
// }
// class triangle{
//     constructor(point1,point2,point3){        
//         this.point1 = point1;
//         this.point2 = point2;
//         this.point3 = point3;
//     }
//     ///check if triangle is valid 
//     //method that checks if triangle is valid. where the longest side must be shorter than the total length of the other two sides added together.
//     validTri(){
//         const side1 = new line(this.point1, this.point2).lengthReturn(); //lengths between each point
//         const side2 = new line(this.point2, this.point3).lengthReturn();
//         const side3 = new line(this.point3, this.point1).lengthReturn();
//         const longest = Math.max(side1, side2, side3); //finds which is the longest with .max
//         const perimeter = side1 + side2 + side3;  //perimeter of triangle 
//         return longest < perimeter - longest; //check the longest side is shorter than sum of other sides
//     }
//      // methods to find perimeter of triangle and area (with area of triangle formula)
//     perimeter() {
//         if (!this.validTri()) return NaN; ///check if triangle is valid
//         //each one should return the area and perimeter of triangle if valid if not they return NaN
//         const side1 = new line(this.point1, this.point2).lengthReturn();
//         const side2 = new line(this.point2, this.point3).lengthReturn();
//         const side3 = new line(this.point3, this.point1).lengthReturn();
//         return side1 + side2 + side3;
//     }
//     // Method to calculate the area of the triangle using Heron's formula
//     area() {
//         if (!this.validTri()) return NaN; //check if triangle is valid
//         const side1 = new line(this.point1, this.point2).lengthReturn();
//         const side2 = new line(this.point2, this.point3).lengthReturn();
//         const side3 = new line(this.point3, this.point1).lengthReturn();
//         const s = (side1 + side2 + side3) / 2; // semi-perimeter
//         return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3)); 
//     }
// }
// // triangle 1
// const triangle1 = new triangle (new point(0, 0), new point(3, 0), new point(0, 4));
// console.log("Triangle 1:");
// console.log("Perimeter:", triangle1.perimeter());
// console.log("Area:", triangle1.area());
// //triangle 2 //invalid one will return NaN
// const triangle2 = new triangle(new point(0, 0), new point(2, 0), new point(3, 0));
// console.log("Triangle 2:");
// console.log("Perimeter:", triangle2.perimeter());    
// console.log("Area:", triangle2.area());