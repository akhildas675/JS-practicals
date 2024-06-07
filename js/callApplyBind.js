// const person={
//     name:'Akhildas',
//     id:27,

// }

// function student(...place){
//     console.log(`Hai I am ${this.name} My id is ${this.id} I'm from ${place}`);
// }

// student.call(person,'kochi')



// const person={
//     name:'Akhildas',
//     id:142,

// }

// function student(place,age){
//     console.log(`hai I am ${this.name} My id is ${this.id} i am from ${place} my age: ${age}`);
// }

// student.call(person,'kochi',24)

// student.apply(person,['palakkad',24])
// const dom=student.bind(person,'Dubai',24)
// dom();

const person={
    name:"Akhildas",
    age:23,
}

function details(place,job){
    console.log(`I am a ${this.name},I am from ${place}`);
}