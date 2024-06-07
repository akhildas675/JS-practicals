const arr = [1,2,3,4,5,6,7,8,9,10]

// for(let i=0;i<=arr.length;i++){
//     if(arr[i]%2==0){
//         arr[i]=0;
//     }
// }
// console.log(arr);


// const output = arr.map((num)=>{
//     if(num%2==0){
//           num=0
//     }
//     return num
// } )



let re = arr.map((x)=>{
    if(x%2==0){
        x=0
    }
    return x
})

console.log(re)
// console.log(output)







const array1 = [1,2,3,4,5,6] ;
const array2 = [1,2,3,4,5,6] ;

const array3 = [...array1,...array2]

let res = array3.reduce((acc,curr)=>{
    acc=acc+curr
    return acc
},0)
console.log(res);



// let ress = array1.map((x,i)=>{
//     return x+ array2[i]

// })
// console.log(ress);

