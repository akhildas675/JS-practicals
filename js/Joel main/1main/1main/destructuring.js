const obj = {
    name: "joel",
    age: 18,
    place:{
        location:"cheraneloor",
        pincode:682034,
        ward:2,
        HouseName:"Valiyaparambil",
    }
}

function fun() {

    //const name = obj.name
    //const name = obj.age
    //const name = obj.place

    const { name,  age, place   } = obj

    console.log(name, age, place.ward)

}
fun()


function odi (){


    const {name,age,place}=obj
    console.log((name,age,place.location));
}
odi()