// function x() {
//   const a = 10;
// }

// var xyz = 30;

// x(); //!functional execution context is created.

// var x = function () {
//   console.log("I'm an anonymous function");
// }; //* anonymous function assigened to a variable called function expression

// x();

// const fn = () => {
//   console.log("fat arrow function");
// };

// console.log(this);

// const obj = {
//   method1: function () {
//     console.log(this);
//   },
//   method2: () => {
//     console.log(this);
//   },
// };

// obj.method1(); //obj
// obj.method2(); //refers to lexical parent this.(window)

// function x() {
//   console.log(this);
//   function y() {
//     console.log(this);
//   }
//   y();
// }
// x();

// const person = {
//   name: "Akshay",
// };
// const person2 = {
//   name: "Simran",
// };
// function x() {
//   console.log(this);
// }
// x(); // same as x.call()
// x.call(this);
// x.call(person);
// x.call(person2);

// const person = {
//   name: "Akshay",
//   print: function () {
//     console.log(this);
//   },
// };

// const person2 = {
//   name: "Simran",
// };

// person.print();
// person.print.call();
// person.print.call(this);
// person.print.call(person2);
// person.print.call(person);

const obj = {
  fN: "prashant",
  printName: () => {
    console.log(this.fN);
    console.log(this);
  },
  printName2: function () {
    console.log(this.fN);
    console.log(this);
  },
};

const obj2 = {
  fN: "Binu",
};

obj.printName(); // ! undefined ,window.fN;
obj.printName2();

obj.printName.call();
obj.printName2.call();
