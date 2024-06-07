

const numbers=[1,2,3,4,4,5,6,6,7,8,8,]


const uniqueNumbers=numbers.filter((value,index,array)=>{
   return array.indexOf(value)==index;
})


console.log(uniqueNumbers)


const str='today is my review'

const word=str.split('')
let result='';

