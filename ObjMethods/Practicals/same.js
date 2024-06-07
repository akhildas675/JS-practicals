

function Same (obj1, obj2){

    let count =0

   
    for (let key in obj1){

        if ( obj1[key]=== obj2[key]){

            console.log("Found same")
            count ++
        }else{

            console.log("Failed")
        }
    }

  console.log(count)



}



let hi ={ name :"Navyendhu", place: "Kochi"}
let hi2 ={ name :"Navyendhu", place: "Kochi"}

Same(hi, hi2)