const arr = [
    {
        name: "joel",
        mark: 97,
        place: "Ernakulam"
    },
    {
        name: "josea",
        mark: 98,
        place: "Trivandrum"

    },
    {
        name: "joy",
        mark: 100,
        place: "Kollam"
    }
]

//foreach

arr.forEach((item)=>{
  console.log(item.mark);
})
// console.log(arr)



//find

var fo = arr.find((item) => {
    return item.name === 'joel';
});

console.log(fo)



//filter

var fo = arr.filter((item)=>{
    return item.mark<=99;
});
console.log(fo)



//map

var fo = arr.map((item)=> {
  return item.name;

});
console.log(fo);



//reduce

var value = arr.reduce((total,item)=>{
    return item.name;
});

console.log(value);