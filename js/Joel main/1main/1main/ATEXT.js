// const array = [1,2,3,4,5,6,7,8,9,0]

// const result = array.reduce((acc,curr)=>{
//     return acc>curr?curr:acc
// })
// console.log(result);



// const obj = {
//     name: "joel",
//     age: 18,
//     place:{
//         location:"cheraneloor",
//         pincode:682034,
//         ward:2,
//         HouseName:"Valiyaparambil",
//     }
// }


// function od(){

// const {name,age} = obj
// console.log(name,age);
// }

// od()
// let odi= "joel" 
// const odii=odi.split('').reverse().join()
// console.log(odii);


// for(let i=odii.length;i>=0;i--){
//     arr.push(odii[i])
// }
// arr.shift()
// console.log(arr)

const ar = ["apple","orange","banana","grapes"]
const re = ar.map((x)=>{
    return x.toUpperCase().charAt()+x.slice(1)
})
console.log(re);
// ar = ["apple","orange","banana","grapes"]
// const re = ar.map((x)=>{
//     return x.toUpperCase().charAt()+x.slice(1)
// })
console.log(re);

const nums = [0,2,1,5,3,4]

// const result = nums.map((a)=>{
    // return nums[a]
// })
// console.log(result);

const numser =[{a:10},{b:120},{c:300}]

const result = numser.reduce((acc,curr)=>{
    for(i in curr){
        return acc=acc+curr[i]
        
    }

},0)
// console.log(result);

const doge = [1,2,3,4,5,6,7,8,9]
doge.splice(3,1)
// const resul =doge.slice(2,4)

// doge.splice(0,0,"Joel")
console.log(doge);
// console.log(resul);


let = 'hello'

// jgnnq
let ="ddfhgswsswh"
// 2d1f2h1g3s


const arr = ["akhildas","avinadh","jOEl","zzzz","xxxx","yyyy"]
// console.log(arr[0].split('').length)


const arr1 = ["akhildas","avinadh","jOElhuhijhu","zzzz","xxxx","yyyy"]
let greater = arr1[0]
arr1.forEach((ele)=>{
if(greater.length < ele.split('').length){
    greater = ele
}
})

// console.log(greater)



const aw = ["akhildas", "avinadh", "jOElhuhijhu", "xaxa","zzzz", "xxxx"];
const greater1 = aw.reduce((acc, curr) => {
    return acc.length>curr.length?acc:curr
},aw[0])
// console.log(greater1);


let xo="ddfhgswsswh"
let newArr= xo.split('')
// console.log(newArr)

const reee = newArr.reduce((acc,curr)=>{
    acc[curr]=(acc[curr]||0)+1
    return acc
},{})
// console.log(reee);


const arrra  =[1,2,3,4,5]
const arrraa =[1,2,3,4,5]

const container = []

for(let i=0;i<arr.length-1;i++){
    container.push(arrra[i])
    container.push(arrraa[i])
}
console.log(container);

