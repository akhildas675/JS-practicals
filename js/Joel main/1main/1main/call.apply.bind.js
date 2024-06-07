const person = {
    name : "akhildas",
    getName(age){
     console.log(this.name,age)
    }

}

let person1 = {
    name:"joel"
    
}

person.getName.call(person1,"10") ;
// person.getName.apply(person1,[20,20]) ;
// const poep = person.getName.bind(person1)
// poep()


// console.log("joel")


///////////////////////////////////////////////////////////////////////////////////////////





// let name={
    //firstName:"Joel",
    // lastName:"Francis"
    
    

// }

// let num2 = {
    // firstName :"sachin",
    // lastName:"tendulkar"
// }


// let odi = function (hometown,state){
    // console.log(this.firstName+this.lastName);
    // console.log(this.firstName+" "+this.lastName +" "+"from"+" "+hometown+","+state)

// }

// odi.call(name)
// odi.call(name,"kochi","kerala")


// odi.apply(name,["kollam","jammu"])


//  let nex = odi.bind(name,"newyork","USA")
//  console.log(nex);
//  nex()



//  notes here 

// The call() method in JavaScript allows you to invoke a function with a specific this value and arguments.

// The apply() method is similar to call, but it takes second arguments as an array.

// The bind() method is used to create a copy but it doesn't immediately invoke the function.
//  Instead, it returns a new function that can be invoked later.


const obj={
    name:"akhildas",
    age:18,
    
    // methods:function fun(){

    //     console.log(`${this.name},${this.age}`)
    // }

}
 

// function students(...place){
//     console.log(`${this.name},${this.age},${place}`);
// }


// students.call(obj,'kerala',)
// students.apply(obj,["joel","cheraneloor","india"])
// let doge = students.bind(obj,['kakanad','kerala','india'])
// doge()