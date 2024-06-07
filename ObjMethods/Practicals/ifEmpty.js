// check whether the object is empty and if not i want to output the first pair 



// function isEmpty(obj){

//     if(Object.keys(obj).length==0){

//         console.log("Empty object")
//     }else{

//         for (let key in obj){

//             if(obj.hasOwnProperty(key)){

//                 console.log(`${key}: ${obj[key]}`)
//                 break;
//             }
//         }
//     }

// }



// let person= {
//     Name: "Navyendhu",
//     age: 30,
//     city: "Kochi"
// }


// let person2={}


// isEmpty(person)






// function empty(person){

//     if(Object.keys(person).length==0){

//         console.log("Object is Empty!!!")

//     }else{

//         for (let key in person){

//             if(person.hasOwnProperty(key)){

//                 console.log(`${key}: ${person[key]}`)
//                 break;
//             }
//         }
//     }



// }

// let p = {

//     Name: "Anjith Gopi",
//     age : 26

// }

// empty(p)



function Empty(obj){

    if(Object.keys(obj).length ==0){

        console.log("Empty object")
    }else{

        for ( let key in obj ){

            if(obj.hasOwnProperty(key)){

                console.log(`${key}: ${obj[key]}`)
                break

            }
        }
    }


}


let object = {
    name:"Navyendhu",
    age : 25
}

Empty(object)










