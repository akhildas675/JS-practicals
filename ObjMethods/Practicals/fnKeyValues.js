

function logObjProp(obj){

    for (let key in obj){
        if (obj.hasOwnProperty(key)){

            console.log(`${key}: ${obj[key]}`)
            break; // PUTTING BREAK WILL ONLY GIVE THE OUTPUT OF FIRST PAIR
        }
    }
}


let person= {
    Name: "Navyendhu",
    age: 30,
    city: "Kochi"
}

logObjProp(person)