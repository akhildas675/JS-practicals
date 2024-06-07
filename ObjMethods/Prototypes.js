    

    // function Greet(){

    //     console.log("Hello")
    // }


    // Greet()


    //     Greet.prototype

    // function* doubleNumbers(numbers) {
    //     for (let num of numbers) {
    //         yield num * 2;
    //     }
    // }

    // doubleNumbers(10)


// function Person(name, age){

//     this.name = name
//     this.age = age

// }

// Person.prototype.sayHello= function(){
//     console.log(`Iam ${this.name} and im ${this.age} years old`)
// }


// let p1 =new Person("Navyendhu", 25)


// p1.sayHello()





function Person(name,age){
    this.name = name
    this.age = age 
}


Person.prototype.Hello = function (){

    console.log(`Hi iam ${this.name}, and iam ${this.age}`)

}

P1 = new Person( "Navyendhu", 25)

P1.Hello()




// let hi = {
//     name: "Navyendhu",
//     age : 25
// }


function hi (name,age){

    this.name= name
    this.age = age


}

hi.prototype.hello= function(){
    console.log(`hi iam ${this.name} and iam ${this.age} years old`)
}


let pp= new hi ("Navyendhu", 25)

pp.hello()
