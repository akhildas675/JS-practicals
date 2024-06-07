

function Create(Name,age,place){
    let Details={}
    Details.Name= Name
    Details.age = age
    Details.place = place
    return Details
}

let Emp1= Create("Navyendhu", 25,"Kochi")

console.log(Emp1)

let Emp2= Create("Farzi", 25,"Palakkad")

console.log(Emp2)


// constructor


function Empdetail(Name,age,place){
    
    this.Name= Name
    this.age = age
    this.place = place
    return this
    
}

let empNavyendhu = new Empdetail("Navyendhu",23,"kochi")
console.log(empNavyendhu)