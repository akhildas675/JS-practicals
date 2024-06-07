
// const array1=[1,2,3,4,5,2,4,5,1,7,9,1,1,1,2,2,2,2,2,2,2,2,2,2] ;
//   var count =0;
//   var max=0;
//   var value =0;

//     for(let i=0;i<array1.length;i++){
//         count=1
//         for(let j=i+1;j<array1.length;j++){
//             if(array1[i]==array1[j]){
//                 count++;
//             }
//         }
//          if(count>max){
//             max=count;
//             value=array1[i]
//          }
//     }
//       console.log(`${value} repeated ${max} times`)

arr=[1,2,3,4,5,2,4,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,1,7,9,1,1,1,2,2,2,2,2,2,2,2,2,2] 

var value=0;
var max=0
var count=0;
for (let i=0;i<arr.length;i++){
    count=1
    for(let j=0;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++

        }
        
    }
    if(count>max){
        max=count;
        value=arr[i]
    }
}

console.log(value+" repeated  "+ max+" value");