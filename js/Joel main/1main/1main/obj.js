const user=[{
    name:'midhun',
    age:24,
    place:'kothamangalam'
},{
    name:'ajith',
    age:37,
    place:'kottayam'
},{
    name:'joel',
    age:14,
    place:'kochi'
}]

const output=user.filter((x)=>x.age<20).map((x)=>x.place)
console.log(output)