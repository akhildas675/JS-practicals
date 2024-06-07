
// forEach(): Executes a function for each element of the array, but does not create a new array.
// for-in()  is used to iterate over all enumerable property keys of an object. It gives you access to the index in the array, not the actual element
// for-of()  is used to iterate over iterable objects like arrays, strings, maps, or sets. It provides a simple and concise way to access elements.





// normal sum
const arr =[10,20,30,40,50]
var sumer = 0;

for(let i=0;i<arr.length;i++){
 sumer=sumer+arr[i] 
}
// console.log(sumer)


// for in sum 

// sum=0;
// for(i in arr){
    // sum=sum+arr[i] 
// }
// console.log(sum)

// --------------------------forin------------------------------------------

const array1= [{a:10,b:20},{c:30,d:40}]

const ress = array1.reduce((acc,current)=>{
  for (i in current){
    acc= acc+ current[i]
  }
  return acc
},0)




// console.log(ress)




// --------------------------foreach------------------------------------------



// for each object  in array

colleagues = [ { "name":"joel"},{"name":"abin"},{"name":"abhilash"}]
colleagues.forEach(function(value,index){
    // console.log(value)
})


//-----------||--------------
 


const arr1 = [[1,2,3],[12],[1],[1]]
const res11 = arr1.reduce((acc,curr)=>{
  curr.forEach((x)=>{
    acc=acc+x
  })
  return acc
},0)
// console.log(res11)

// -----------------------------foreof------------------------------------------

const arr7= [[20],[1],[10],[2],[3]]
let result=0
for(const single of arr7){
  result+=single[0]
}
// console.log(result)



// ---------------------------my question-----------------------------------------



const a = [{dsdd: 10, sd: 20},{tt: 30, m: 40},{a: 30, z: 40}];
let sum =0;
for(let i=0 ; i<a.length ;i++){
  for(let value in a[i]){
    sum = sum+a[i][value]
  }
}
console.log(sum);



// -----------||--------------

// const ressx = arx.reduce((acc, current) => {
//   if (typeof current === 'number') {
//     return acc + current;
//   }

//   if (typeof current === 'object' && current !== null) {
//     return acc + Object.values(current).reduce((sum, value) => sum + value, 0);
//   }

//   return acc;
// }, 0);

// console.log(ressx);

// --------------------------------------------------------------------



