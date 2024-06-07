
// function display(name,wish)


// {

//     wish=wish??"You dont have any wish"
//     console.log(`${name}${wish}`)


// }

// display("Anjith"," Hello How are you")


// const array =[0,1,0,2,4,3,4,5]

// const newArr= array.map((num)=>num*num)
// console.log(newArr)
/////////////////////////////////////////////////////////////////


// const newArray=[0,1,2,0,1,2,2,4,5,6,
// 4,8,5]

// function displayFrequency(arr){

//     let frequency={}

//     for(const element of arr){

//         frequency[element]=(frequency[element]||0)+1
        
//     }
//     console.log(frequency)

//     return frequency


// }

// displayFrequency(newArray)





// display the frequency of the given array



// const numArr= [0,1,2,0,2,4,5,1]

// function getFrequency(array){
//     const freq={}
    
//     for(const element of array){

//         freq[element]=(freq[element]||0)+1

        

//     }
//     console.log(freq)
//     return freq

// }

// getFrequency(numArr)



// const nameStr= "ANJITH GOPI"

// let reversed=''

// for(let i=nameStr.length-1;i>=0;i--){
//     reversed+= nameStr[i]
// }

// console.log(reversed)


// //////////////////////////////////////////////////////////
// const reversedStr= nameStr.split('').reverse().join('')

// console.log(reversedStr)






// function displayValue(x){
// //    let x=10
// //    var x=10
//    x=10
//     console.log(`x:${x}`)

// }



// const num1=5


// displayValue(num1)



// console.log(`num1:${num1}`)

/////////////////////////////////////////////////////////

// const numArray= [1,2,[3],[4,5,6,[7]]]

// //const result =  [2,4,6,8,10,12,14]


// const flatArr= numArray.flat(Infinity)
// console.log(flatArr)

// const res= flatArr.map((num)=>num*2)

// console.log(res)









////////////////////////////////////////////////////////////////////



// const words=['Apple ','Mango','Orange','Grapes']

// const moreThan5= words.filter((arg)=>arg.length>5)

// console.log(moreThan5)






// const num=[1,2,3,4,5,6,7,8]

// console.log(num.map((elem)=>elem * 2))


// console.log(num.flatMap((elem)=> [elem*2,elem]))

// let numbers = [1, 2, 3, 4];

// let squaredAndFlattened = numbers.flatMap((num) => [[num, num * num]]);

// console.log(squaredAndFlattened);
// // Output: [1, 1, 2, 4, 3, 9, 4, 16]


// const input = null

// const result= input?? "Anjith"

// console.log(result)





// const valuesArr=[1,3,5,7,9]

// for(let i=0;i<10 ;i++){


//     if(!valuesArr.includes(i)){

//     console.log(i)

//     }
// }
///////////////////////////////////////////////////////////

// const myPromise= new Promise((resolve, reject)=>{

//     reject('failed') 
   
// })


// myPromise.then((data)=>{
//   console.log(data)
// })

// .catch((error)=>{
//     console.log(error)
// })









