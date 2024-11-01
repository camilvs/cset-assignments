// //////////////////OBJECTS

// var person = {
//   firstName:"John",
//   lastName:"Doe",
//   // age:50,
//   // eyeColor:"blue"
//   id :5566,
//   fullName:function(){
//     return this.firstName + " " + this.lastName
//   }
// }
// console.log(person)
// var person = {
//   firstName:"John",
//   lastName:"Doe",
//   // age:50,
//   // eyeColor:"blue"
//   age:25,
//   greet: function(){
//     console.log("Hello, " + this.lastName);
//   }
// };
// person.greet()
// console.log(person.age);

// let book = {
//   title:"JavaScript essentials ",
//   author:"Haha",
//   pages:"350",
//   publisher:"moon",
//   read: function(){
//     console.log("reading " + this.title + "by " + this.author);
//   }
// };
// console.log("title:", book.title);
// console.log("author:", book.author);
// book.read();

// const person={
//   name:{
//     first:"cam" ,
//     last:"camiiii"
//   },
//   age:18,
//   gender: "female",
//   interest:["sleeping", "eating"],
//   bio: function(){
//     console.log(this.name[0] + " " + this.name[1] + " is " + this.age + "years old");
//   },
//   greeting:function(){
//     console.log("hi! im " +this.name[0] +'.')
//   }
// };
// // person.greeting();
// console.log(person.name);
// console.log(person.name.first);
// console.log(person.age);
// console.log(person.interest[0]);
// console.log(person.bio());
// console.log(person.greeting());

// ///////JSONNNNNN

// let text ='{"type": "laptop", "model":"Macbook Pro"}';
// let object = JSON.parse(text);
// console.log(object);
// console.log(object.type);
// console.log(object['model']);


// let string= JSON.stringify({squirrel : false, 
//                            events: ['weekend']});
// console.log(string);

// console.log(JSON.parse(string).events);

// //////OOP//////////////
// function createNewPerson(name){
//     const obj ={};
//     obj.name = name;
//     obj.greeting = function(){
//         console.log('hi! i\'m ' + obj.name + '.');
//     };
//     return obj;
// }
// const salva = createNewPerson('Salva');
// console.log(salva.name);
// salva.greeting();

// // ---- a shortcut for same thing ^^^^^/////
// class Person{
//     constructor(name){
//         this.name= name;
//     }

//     greeting(){
//         console.log('hi! i\'m ' + this.name + '.')
//     }
// }

// let p = new Person('James');
// p.greeting();


// exampleeee///
let person1 =
{name:'bob',
 greeting : function(){
    console.log('hi! i\'m ' +this.name + '.')
 }
};
let person2 = 
{name:'sarah',
    greeting : function(){
       console.log('hi! i\'m ' +this.name + '.')
    }
   };

console.log(person1.name);
person1.greeting();
console.log(person2.name);
person2.greeting();