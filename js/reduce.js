// const arr=['akhilllllllllllllllll','diguel','cilesssssssss','jef']

// const result=arr.reduce((acc,cuc)=>acc.length>cuc.length?acc:cuc)
// console.log(result);






// let ad=[{a:3},{b:[10,20]},{c:5},{d:[20,50]}]




// let sum=0;

// for(let i=0;i<ad.length;i++){

//     for(let x in ad[i]){
//         console.log(ad[i][x])
//         if(Array.isArray(ad[i][x])){
//             sum+=ad[i][x].reduce((acc,cuc)=>acc+cuc)
//         }else{
//             sum+=ad[i][x]
//         }
//     }
// }


// console.log(sum)




let obj1 = [{ a: 20, b: { c: 30 } }, { s: 10 }, [20], 30];
let flated = obj1.flat(Infinity).filter(value => typeof value === 'number');
let result = flated.reduce((acc, cucc) => acc + cucc, 0);
console.log(result); // Output: 110



















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

// let arr=[2,3,4,5,6,7,9]

// let result=arr.reduce((acc,cuc)=>{
//  if(cuc%2==0&&cuc>acc&&cuc>0)
//     {
//     acc=cuc
//     }
//     return acc
// },)
// console.log(result);


// let result=arr.reduce((acc,cuc)=>{
//     if(cuc%2!==0 &&cuc>=0){
//         acc+=1
//     }
//     return acc
// },0)
// console.log(result);



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


// let red=[10,2,3,4,100,5]

// let ans=red.reduce((acc,cuc)=>{
//     if(cuc%2==0 && acc>cuc){
//         acc+=cuc
//     }
//     return acc
// })
// console.log(ans);

