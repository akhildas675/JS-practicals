//==============================Map=================

// const arr=[10,20,30,40,50]

//square
// let result=arr.map((x)=>x*x)

//double

// let result=arr.map((x)=>x+x)
// console.log(result);


// function capitalizeNames(names) {
//     return names.map(name => name.charAt(0).toUpperCase()+name.slice(1))
// }

// const names = ['john', 'jane', 'alex', 'emma'];
// console.log(capitalizeNames(names)); // Output: ['John', 'Jane', 'Alex', 'Emma']


// const books = [
//     { title: 'Harry Potter', year: 1997 },
//     { title: 'The Da Vinci Code', year: 2003 },
//     { title: 'The Lord of the Rings', year: 1954 },
//     { title: 'The Hunger Games', year: 2008 }
// ];

// function filterBooks(books){
//     return books.filter((x)=>x.year>2000).map((x)=>x.title)
// }

// console.log(filterBooks(books)); // Output: ['The Da Vinci Code', 'The Hunger Games']

const numbers = [1, -2, 3, -4, 5, -6];

function absoluteValues(numbers){
    return numbers.map(x=>(x<0)?-x:x)
}
console.log(absoluteValues(numbers)); // Output: [1, 2, 3, 4, 5, 6]


// const names = ['alice', 'bob', 'charlie', 'diana'];

// function convertToUppercase(){
//     return names.map((x)=>x.toUpperCase())
// }

// console.log(convertToUppercase(names)); // Output: ['ALICE', 'BOB', 'CHARLIE', 'DIANA']


//================================Reduce===========
// const arr=[10,20,30,40,50]

// const out=arr.reduce((acc,cur)=>{
// const result=acc+cur;
// return result;
// })
// console.log(out);

//=================================================filter================

// const arr=[{a:20},{b:30},{c:40}]

// const result=arr.filter((value,index)=>{
//     return value= value+index
    
// })
// console.log(result);



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function filterEvenNumbers(){
//     return numbers.filter((x)=>x%2==0? x:false)
// }



// console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]




// const students = [
//     { name: 'Alice', score: 80 },
//     { name: 'Bob', score: 45 },
//     { name: 'Charlie', score: 65 },
//     { name: 'David', score: 55 },
//     { name: 'Eve', score: 75 }
//   ];
  
//   function filterPassingStudents(){
//     return students.filter(students=>students.score>=60)
//   }
  
//   console.log(filterPassingStudents(students));
  /* 
  Output:
  [
    { name: 'Alice', score: 80 },
    { name: 'Charlie', score: 65 },
    { name: 'Eve', score: 75 }
  ]
  */
  


  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];


  function filterShortNames(){
    return names.filter(name=>name.length<=5)
  }

  // console.log(filterShortNames(names));
  // Output: ['Alice', 'Bob', 'David', 'Eve', 'Frank']
  

//============================================= constructor

const array=[10,20,30,40,50]
const result=array.constructor
console.log(result)


//================================= push

// const array=['miles','miguel','gwen','peter','prowler']
// array.push('Aron')

// console.log(array);

//=============================== splice ========================


//adding 
// const arr=['miles','miguel','gwen','peter','prowler']
// arr.splice(4,0,'Aron')
// console.log(arr);


//Remove 

// arr.splice(0,2)
// console.log(arr);

//================= Slice ======

// let rem=arr.slice(0,37)
// console.log(rem);