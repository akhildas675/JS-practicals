//       regex      //
const arr = ["akhildas","avinadh","jOEl","zzzz","xxxx","yyyy"]
const result = arr.filter((x)=>{
  return /[aeiuo]/i.test(x)
})
// console.log(result);
// ---------------------------------------------------------------------//
// Math.ceil
// maath.floor

// let number = 2.33
// let odi=Math.ceil(number)

// console.log(odi);



//-------------------- sum of same index **------------------------------//


let ar= [1,2,3,4,5,6]
let ara = [1,2,3,4,5,6]

let sumArray = ar.map((value, index) => value + ara[index]);
// let sumarr= ar.map((value ,index)=>{
//   return [value,ara[index]]
// })
// console.log(sumarr);
console.log(sumArray);

// ------ Another method

// let sumarr = [];

// for (let i = 0; i < ar.length; i++) {
//   sumarr.push(ar[i] + ara[i]);
// }

// console.log(sumarr);




//-------------------------largest------------------------------------//

// const array=[1,2,3,4,5,6,7,8,9,10]


// const res = array.reduce((acc,curr)=>{
//   return acc>curr?acc:curr
// })
// // console.log(res);

// const resu = Math.max(...array)
// // console.log(resu);


//-----------------------------count-----------------------------------//

const array1=[1,2,3,4,5,2,4,5,1,7,9,1,1,1,2,2,2,2,2,2,2,2,2,2] ;
  var count =0;
  var max=0;
  var value =0;

    for(let i=0;i<array1.length;i++){
        count=1
        for(let j=i+1;j<array1.length;j++){
            if(array1[i]==array1[j]){
                count++;
            }
        }
         if(count>max){
            max=count;
            value=array1[i]
         }
    }
      // console.log(`${value} repeated ${max} times`)


// -------
const intArr= [1,2,3,4,1,2,3]


const elem = array1.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  },{});
  console.log(elem);


  const doge = intArr.reduce((acc,curr)=>{
    acc[curr]= (acc[curr]||0)+1
    return acc
  },{})

console.log(doge);
  /////////////////////////////////////////////////////

  function freq(arr){

    const resArr=arr.reduce((acc,curr)=>{
       acc[curr]= (acc[curr]||0)+1
       
      return acc
    },{})
    // console.log(resArr)


  }
  // freq(intArr)


// -----------------sum of objects-----------------




let obj =  { a :2 , b:{c : { d : 5}}}


// console.log(a+b);




// -------------------flat------------------------

const arr71= [[[[[[[[[[20],[10],[10],[2],[3],10],30,40,70,[40,50,30],[30]]]]]]]]]



const r = arr71.flat(Infinity)
// console.log(r);

const sumer = r.reduce((acc,curr)=>{
  
  return acc+curr
})
// console.log(sumer);

// ------------

const orr=[[{a:1,b:3}]]

// console.log(r1);
let m=orr[0][0].a
let h=orr[0][0].b
console.log(h+m);



// ---------------------sum-----------------------------

const ori= [10,30,30,10,50]
let sum=0
for(let i=0;i<ori.length;i++){

    sum=sum+ori[i]
  }
// console.log(sum);


// ----------------------------
const arra1= [{a:10,b:20},{c:30,d:40},{mf:4}]

// const ress = arra1.reduce((acc,current)=>{
//   for (i in current){
//     acc= acc+ current[i]
//   }
//   return acc
// },0)
// // console.log(ress);   

const adii= arra1.reduce((accuu,curr)=>{
  for(i in curr){
    accuu=accuu+curr[i]
  }
return accuu

},0)
// console.log(adii);
// -------------------------------
const arra2y = [1, 2, 3, 4];
const adi = arra2y.flatMap((num)=>{
  return num+2
});
// console.log(adi); 

const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age:50},
];

const re = users.reduce((acc,curr)=>{
  return acc.age>curr.age?acc:curr
},users[0])
// const a= re.lastName
// console.log(re)



const doge1 = users.filter((a)=>{
  if(a.age<30){
    return a
  }
})
const ree= doge1.map((x)=>{
return [x.firstName+x.lastName]
})
// console.log(doge1);
// console.log(ree.flat(Infinity));






// let s ='hello my oeln name is joel'
// let od = 'oel';
// let count = 0;

// for (let i = 0; i < s.length; i++) {
//   if (s.slice(i, i + od.length) === od) {
//     count++;
//   }
// }

// console.log(count);