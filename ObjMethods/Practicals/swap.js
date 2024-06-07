
let person= { name:"Naveen", age:21}

function swap(obj){

    for(let key in obj){
      let temp=obj[key]
      delete obj[key]
      obj[temp]=key

    }
    console.log(obj)
}

swap(person)
