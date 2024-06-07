const arr1=[1,2,3,4,5,6,7]

const arr2=[5,6,7,8,9,10]

let result1=arr1.filter((x)=>{
    return !arr2.includes(x)
})
let result2=arr2.filter((x)=>{
    return !arr1.includes(x)
})
const result=[...result1,...result2]

console.log(result);

