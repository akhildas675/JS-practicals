// const arr=['zakhillllll','miguel','miles','jef']

// const result=arr.reduce((acc,cuc)=>(acc<cuc)?cuc:acc)
// console.log(result);



// let ad=[{a:3},{b:[10,20]},{c:5},{d:[20,50]}]

// let sum=0;

// for(let i=0;i<ad.length;i++){
//     for(let x in ad[i]){
//         if(Array.isArray(ad[i][x])){
//             sum+=ad[i][x].reduce((acc,cuc)=>acc+cuc)
//         }else{
//             sum+=ad[i][x]
//         }
//     }
// }
// console.log(sum);


//find the highest even number using reduce

let arr=[2,3,4,5,6,7,9]

// let result=arr.reduce((acc,cuc)=>{
//  if(cuc%2==0&&cuc>acc&&cuc>0)
//     {
//     acc=cuc
//     }
//     return acc
// },)
// console.log(result);


let result=arr.reduce((acc,cuc)=>{
    if(cuc%2!==0 &&cuc>=0){
        acc+=1
    }
    return acc
},0)
console.log(result);



// let arr= [{book: 'one', price: 170}, {book: 'two', price: 200}, {book: 'three', price: 130}]

// let result=arr.reduce((acc,cuc)=>{
//    if(acc>cuc.price){
//     return cuc.price
//    }else{
//     return acc
//    }
// },arr[0].price)
// console.log(result);

// let array=[[[[[[[1,2,3,4,5,6,7,8]],9,10]]]]]

// let arr=array.flat('Infinity')
// console.log(arr);


