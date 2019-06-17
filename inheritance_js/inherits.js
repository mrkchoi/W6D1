// Function.prototype.inherits = function(Parent){
//   function Surrogate() {}
//   Surrogate.prototype = Parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };



// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.eat = function(snack) {
//   console.log(`I ${this.name} loooooveee to eat ${snack}!!`);
// };

// Doge.inherits(Animal);

// function Doge(name, breed) {
//   Animal.call(this, name);
//   this.breed = breed;
// }

// Doge.prototype.woof = function() {
//   console.log(`The name is ${this.name}. such woof. many loud. :)`);
// };


// let d = new Doge('doge', 'sheeba');
// console.log(d.eat('granolas'));
// console.log(d.woof());




// class Animal{
//   constructor(name){
//     this.name = name;
//   }

//   eat(delicousSnack){
//     console.log(`I ${this.name} loooooveee to eat ${delicousSnack}!!`);
//   }
// }

// class Doge extends Animal{
//   constructor(name,breed){
//     super(name);
//     this.breed = breed;
//   }

//   woof(){
//     console.log(`The name is ${this.name}. such woof. many loud. :)`);
//   }

// }

// let d = new Doge('doge', 'sheeba');
// console.log(d.eat('granolas'));
// console.log(d.woof());


Function.prototype.inherits = function(Parent){
  let o = Object.create(Parent.prototype);
  debugger;
  this.prototype = o;
  this.prototype.constructor = this;
  debugger
};



function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function(snack) {
  console.log(`I ${this.name} loooooveee to eat ${snack}!!`);
};

Doge.inherits(Animal);

function Doge(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Doge.prototype.woof = function() {
  console.log(`The name is ${this.name}. such woof. many loud. :)`);
};


let d = new Doge('doge', 'sheeba');
debugger
console.log(d.eat('granolas'));
console.log(d.woof());