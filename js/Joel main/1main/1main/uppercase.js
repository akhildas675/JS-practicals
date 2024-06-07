let s="hello"
let joel = s.toUpperCase()
console.log(joel)


// uppercase an array 

const names1 = ["joel","einstien","elon","benjamin"]
const capiR = names1.map((item)=>{
    return item.toUpperCase()
})
console.log(capiR)




const names = ["joel","anjith","abhilash","naveen","alan"]
const result = names.map((x)=>{
    return x.toUpperCase()
})
// console.log(result);


const capi = names.map((name)=>{
    return name.charAt(0).toUpperCase()+name.slice(1)
})
// console.log(capi);


const rest = names.map((x)=>{
    return x.charAt(0).toUpperCase()+x.slice(1)
})
// console.log(rest);


const rest1 = result.map((x)=>{
    return x.charAt(0).toLowerCase()+x.slice(1)
})
// console.log(rest1);








