
// Shallow copy 


const person={
    name:'leodas',
    age:27,
    address:{
        city:'Chennai',
        Mob:12336554
    }
}
const Alter=Object.assign({},person);
Alter.name='Parthibhan';
Alter.address.city='kashmir'
Alter.address.Mob=999999

console.log(person);
console.log(Alter);



// const profile={
//     name:'Akhildas',
//     age:'24',
//     address:{
//         city:'Los Angels',
//         Id:'123'

//     }
// }

// const student=Object.assign({},profile);
// student.name='Leo das';
// student.address.city='Kashmir';
// console.log(profile);
// console.log(student);





// Deep copy


// const person={
//     name:'Akhildas',
//     age:23,
//     address:{
//         city:'Under world',
//         phone:4643646

//     }
// }

// const deepcopy=JSON.parse(JSON.stringify(person))

// // const deepcopy=structuredClone(person)
// deepcopy.name='Jhon Wick',
// deepcopy.address.city='USA';


// console.log(person);
// console.log(deepcopy);




//Deep copy 


// const person={
//     name:'Akhildas',
//     age:23,
//     address:{
//         city:'Kerala',
//         Id:'5555'

//     }
// }


// const student=structuredClone(person)
// student.address.city='London'

// console.log(person)
// console.log(student)