
let obj = [{ a: 20, b: { c: 30 } }, null, undefined, 10, 20,[[[40]]] [20], [[20]]];

// function sumValues(input) {
//   let sum = 0;

//   if (Array.isArray(input)) {
//     for (let item of input) {
//       sum += sumValues(item);
//     }
//   } else if (typeof input === 'object' && input !== null) {
//     for (let key in input) {
//       sum += sumValues(input[key]);
//     }
//   } else if (typeof input === 'number') {
//     sum += input;
//   }

//   return sum;
// }

// let totalSum = sumValues(obj);
// console.log(totalSum); // Output: 100


// let obj1=[{ a: 20, b: { c: 30 } }]
// let sum=0;

// obj1.forEach(item=>{
//     for(let x in item ){
//         if(typeof item[x]==='number'){
//             sum+=item[x]
//         }
//     }
// })
// console.log(sum);

// let obj1 = [{ a: 20, b: { c: 30 } },a={s:10},[20],30];
// let sum = 0;

// for(let i=0;i<obj1.length;i++){
//     let current=obj1[i]
//     // console.log(current);
//     for(let key in current){
//         let value=current[key];
//         // console.log(value);
//         if(typeof value==='object' && value !==null){
//             for(let nestedkey in value){
//                 let nestedValue=value[nestedkey];
//                 // console.log(nestedValue);
//                 if(typeof nestedValue==='number'){
//                     sum+=nestedValue;
//                 }
//             }
//         }else if(typeof value==='number'){
//             sum+=value;
//         }
//     }
// }

// console.log(sum);

// let flated=obj1.flat(Infinity).filter(value=>typeof value==='number')

// let result=flated.reduce((acc,cucc)=>acc+cucc,0)
// console.log(result);
let obj1 = [{ a: 20, b: { c: 30 } }, { s: 10 }, [20,10],,[[[10,40]]],30,null,undefined];
let ad=[{a:3},{b:[10,20]},{c:5},{d:[20,50]}]


function flattenArray(array) {
    let result = [];

    array.forEach(item => {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else if (typeof item === 'object' && item !== null) {
            result.push(...flattenArray(Object.values(item)));
        } else if (typeof item === 'number') {
            result.push(item);
        }
    });

    return result;
}

// Flatten the array to get all the numbers
let flattened = flattenArray(ad);

// Sum the numbers using reduce
let sum = flattened.reduce((acc, num) => acc + num, 0);

console.log(sum); // Output: 110



// function sumOfArray(arr){
//    return  arr.reduce((acc,cuc)=>{
//         if(Array.isArray(cuc)){
//             return acc+sumOfArray(cuc)
//         }else if(typeof cuc==='object' && cuc!==null){
//             return acc+sumOfArray(Object.values(cuc))
//         }else if(typeof cuc==='number'){
//             return acc+cuc
//         }else{
//             return acc
//         }
//     },0)
    
// }

// let result=sumOfArray(obj1)
// console.log(result);


// function add(array){
//     return array.reduce((acc,cuc)=>{
//         if(Array.isArray(cuc)){
//             return acc+add(cuc)
//         }else if(typeof cuc==='object' && cuc!==null){
//             return acc+add(Object.values(cuc))
//         }else if(typeof cuc=='number'){
//             return acc+cuc
//         }else{
//             return acc
//         }
//     },0)
  
// }

// let result=add(ad)
// console.log(result);


function addSum(array){
    return array.reduce((acc,cuc)=>{
        if(Array.isArray(cuc)){
            return acc+addSum(cuc)
        }else if(typeof cuc==='object' && cuc!==null){
            return acc+addSum(Object.values(cuc))
        }else if(typeof cuc=='number'){
            return acc+cuc
        }
        return acc
    },0)
}
let result=addSum(ad)
console.log(result);