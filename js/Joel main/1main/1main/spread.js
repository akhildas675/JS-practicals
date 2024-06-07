var obja = {
    a:1,
    b:2,
    c:"hello"
}
var obj2={
    ...obja,
    // z:32
    a:2
}



console.log(obj2)
console.log(obja)


console.log(obj2==obja);