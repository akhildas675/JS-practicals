//Object Freeze



const profile={
    name:'Akhildas',
    age:24,
}

Object.freeze(profile)

profile.age=23;


console.log(profile);


//Seal


// const profile={
//     name:'Akhildas',
//     age:23,

// }

// Object.seal(profile)


// profile.age=24;

// profile.address='Kochi';

// console.log(profile);
//--------------------------------

// const person={
//   name:"akhildas",
//   place:'palakkad'
// }

// Object.seal(person)

// person.age=23;

// console.log(person);

