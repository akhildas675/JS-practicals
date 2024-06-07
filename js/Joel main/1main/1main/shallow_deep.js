// shalow copy  the spread operator can be used to create a shallow copy of an object it only copies the top-level propeties not nested object
// -simple and faster used in simple objects 

// shallow copy **
const per={
    name :"joel",
    age :18,
    address: {
        city:"cheraneloor",
        pincode:682034

    }
}
const cloned= Object.assign({},per)
cloned.name="odi";
cloned.address.city="Kochi"



console.log(per);
console.log(cloned);

// ----------------------------------------------


// const person ={
//     name :"joel",
//     age :18,
//     address: {
//         city:"cheraneloor",
//         pincode:682034

//     }
// }
// const person1={
//      ...person
// }

// person1.name="odi"
// person1.address.city="chitoor"

// console.log(person)
// console.log(person1)


// -----------------------------------------------------


// deepcopy methdos **

// deep opy creates completely independent  copy of the original object along with all objects inside it no maater how deeply nested are 
//  if you make any changes in the cloned object the original remains untouched and they wont affect each other
// -independent and safe , its slover , used in complex nested objects 


const obj = {
    name :"Batman",
    age :18,
    address: {
        city:"kochi",
        pincode:682077

    }
  };
  
  const copy = structuredClone(obj)
  copy.name="Joel"
  copy.address.city="EKM"

console.log(obj);
console.log(copy);


// -----------------------------------





// const odi = {
//     name :"Batman",
//     age :18,
//     address: {
//         city:"kochi",
//         pincode:682077

//     }
//   };
  
//   const clonedObj = JSON.parse(JSON.stringify(odi))

//   clonedObj.name="Joel"
//   clonedObj.address.city="EKM"

//   console.log(odi);
//   console.log(clonedObj);



















//shallow copy


// let a=[1,2,3,4]
// let b=[...a].reverse()
// console.log(a);
// console.log(b);

// let ar=["ofi","odi","adi"]
// let br=[...ar].reverse()
// console.log(ar);
// console.log(br);
