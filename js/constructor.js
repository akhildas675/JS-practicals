/* 
A constructor is a special function that creates and initializes an object instance of a class.

*/


// function constructor(name){
//     this.name=name;
// }
// const person= new constructor('Akhildas')

// console.log(person.name);                   


// function display(name){
//     this.name=name;
// }
// const user=new display('Miles')
// console.log(user.name);

function Display(name,place){
    this.name=name,
    this.place=place
}

const person=new Display("akhildas","palakkad")
console.log(person);


function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  
  var person1 = new Person("Vivek", 76, "male");
  console.log(person1);
  
  var person2 = new Person("Courtney", 34, "female");
  console.log(person2);