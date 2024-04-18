"use trict";

const no1 = document.querySelector(".no1");
console.log(no1);

//trg 1
var name = "john";
var age = "25";
if (age > 18) {
  var name = "mr john";
}
console.log(name);

//trg 2
let name2 = "sam";
let age2 = "26";
if (age2 > 18) {
  let name2 = "mr sam";
}
console.log(name2);

var name6 = "jason";
var name6 = "mr jason";
console.log(name6);

// let name7 = "marry";
// let name7 = "ms marry";
// console.log(name7);

let name8 = "harry";
name8 = "mr harry";
console.log(name8);

var name9 = "tony";
name9 = "mr tony";
console.log(name9);

//vòng lặp
const nameS = Symbol("name");
const person = {};
person[nameS] = "john";
console.log(person[nameS]);

const age8 = 20;
switch (age8) {
  case 18:
    console.log("like");
  case 20:
    console.log("wine");
    break;
  case 20:
    console.log("coca");
}
for (let rep = 1; rep <= 30; rep++) {
  console.log("hello");
}
const person10 = { age10: 18, name10: "john" };
console.log(person10["age10"]);
