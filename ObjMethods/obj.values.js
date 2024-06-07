// Object.values():
// Returns an array of a given object's own enumerable property values.

const Hello = {name: "Navyendhu", place: "Kochi", age:25}

console.log(Object.values(Hello))

// Output : [ 'Navyendhu', 'Kochi', 25 ] 


const hey={a:10,b:20,c:10}
let value=Object.values(hey)

let sum=0;
for(let i=0;i<value.length;i++){
    sum+=value[i]
}
console.log(sum);