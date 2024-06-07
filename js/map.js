function addPrefix(names){
    return names.map(names=>"Mr. "+names)
}



const names = ["John", "Alice", "Bob", "Emily"];
console.log(addPrefix(names)); // Output: ["Mr. John", "Mr. Alice", "Mr. Bob", "Mr. Emily"

//---------------------------------------------------------

// function capitalizeNames(names) {
//     return names.map(x => x.charAt(0).toUpperCase()+x.slice(1))
// }




// const names = ['alice', 'bob', 'charlie', 'david'];
// console.log(capitalizeNames(names)); // Output: ['Alice', 'Bob', 'Charlie', 'David']


// function capitalizeWords(words) {
//     return words.map(x=>x.charAt(0).toUpperCase()+x.slice(1))
// }

// const words = ["hello", "world", "javascript"];
// console.log(capitalizeWords(words)); // Output: ["Hello", "World", "Javascript"]




// const array=[
//     {name:'midhun',age:24,place:'kothamangalam'},
//     {name:'joel',age:18,place:'kochi'},
//     {name:'anjith',age:28,place:'paravur'},
//     {name:'amal',age:34,place:'pala'} 
// ]


// let result=array.filter((item)=>item.age>25).map((value)=>value.name)
// console.log(result);
//  array.forEach((x)=>{
//     // if(x.age>20){
//     console.log(x.name);
//     // }
//  })


// const names = ['alice', 'bob', 'charlie', 'david'];
// let result=names.map((x)=>x.charAt(0).toUpperCase()+x.slice(1)).map(x=>"mr."+x)
// console.log(result);


let arr=[1,2,3,4,5,6,7]

let result=arr.map((x)=>{
    if(x%2==0){
        return 'even'
    }else{
        return 'odd'
    }
})

console.log(result);

