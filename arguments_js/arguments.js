// // sum
// // Write a sum function that takes any number of arguments:

// // sum(1, 2, 3, 4) === 10
// // sum(1, 2, 3, 4, 5) === 15
// // Solve it first using the arguments keyword, then rewrite your solution to use the ...rest operator.


// }


// function sum(args) {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }

//   return sum;
// }

// // console.log(sum(1,2,3,4,5));


// // Function.prototype.myBind = function(...bindArgs){
// //   let that = this;
// //   return function(...callArgs){
// //     return that.apply(bindArgs[0], bindArgs.slice(1).concat(callArgs));
// //   };
// // };


// Function.prototype.myBind = function (args1) {
//   let that = this;
//   let arguments1 = Array.from(arguments);
//   return function(args2) {
//     let arguments2 = Array.from(arguments);
//     return that.apply(arguments1[0], arguments1.slice(1).concat(arguments2));
//   };
// };


// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// // markov.says.myBind(pavlov, "meooooow", "selam")();


// // function curriedSum(numArgs) {
// //   let numbers = [];
  
// //   return function _curriedSum(arg) {
// //     numbers.push(arg);

// //     if (numbers.length === numArgs) {
// //       let sum = 0;
      
// //       for(let i=0; i<numbers.length; i++) {
// //         sum += numbers[i];
// //       }

// //       return sum;

// //     }else {
// //       return _curriedSum;
// //     }

// //   };
// // }

// // let total = curriedSum(3);
// // console.log(total(5)(3)(1));



Function.prototype.myCurry = function(numArgs) {
  let numbers = [];
  let that = this;

  return function _myCurry(arg) {
    numbers.push(arg);
    if (numbers.length === numArgs) {
      return that(...numbers);
    } else {
      return _myCurry;
    }
  };
};


function sum(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

// let counts = sum.myCurry(3);
// console.log(counts(1)(2)(3));  // => 6


console.log(sum.myCurry(5)(1)(2)(3)(4)(5));
// console.log(counts(1)(2)(3));  // => 6
