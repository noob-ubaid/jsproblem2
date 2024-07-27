// 1.
// const person = {
//     name : "hablu mama",
//     age : 20
// }
// let {name,age} = person ;
// console.log(person)




// 2.
// import { circle } from "./module.js";
// const about = circle(4);
// console.log(about)




// 3.
// function rectengle(a,b){
//     return a * b
// }
// let all = rectengle(20,10);
// console.log(all)





// 4.
// getter
// let person = {
//     firstName : "Ubaidur",
//     lastName : "Rahman",
//     fullName : "Ubaidur Rahman",
//     get Name (){
//         return this.fullName
//     }
// }
// console.log(person.fullName)


// setter
// let person = {
//     fullName : "Ubaidur Rahman",
//     set name(newname){
//         this.fullName = newname
//     }
// }
// person.name = "Hablu Mama"
// console.log(person.fullName)





// 5.
// const Circle = class {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     Circumference() {
//         return 2 * 3.1416 * this.radius;
//     }
// };
// const circle = new Circle(4);
// console.log(circle.Circumference())







6.
// let names = "name"
// const propname = {
//     [names]:"Ubaidur Rahman"
// }
// console.log(propname)






// 7.
// function Animal(legs) {
//     this.legs = legs;
// }
// class Dog extends Animal {
//     constructor() {
//         super(4);
//     }
//     walk() {
//         console.log(`go walking`);
//     }
// }

// let dog = new Dog();
// dog.walk(); 







8.
// function shape(circle){
//     if(!new.target){
//         throw "cannot be instantiated directly."
//     }
//     this.circle = circle;
// }
// let vera = new shape(2);
// console.log(vera)







// 9.
// class MathUtil {
//     static square(number){
//         return number * number
//     }
// }
// console.log(MathUtil.square(4))










10.
const sym = Symbol();
const obj = {
    [sym] : "Ubaidur Rahman"
}
console.log(obj[sym])




