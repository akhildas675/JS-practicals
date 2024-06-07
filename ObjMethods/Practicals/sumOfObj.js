


function Sum (obj){

    let sum =0

    for (let key in obj){
       
        if(typeof obj[key]=== 'number'){

            sum+= obj [key]
        }

    }

    return sum
}

let fruits = {a:10,b :100, c : 5 , d:'b'}


let total=Sum (fruits)

console.log(total)


// const fs = require('fs');
// const util = require('util');


// const readFileAsync = util.promisify(fs.readFile);


// async function readData() {
//   try {
//     const data = await readFileAsync('example.txt', 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.error('Error reading file:', err);
//   }
// }

// readData();
