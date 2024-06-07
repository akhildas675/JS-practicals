const intArr= [1,2,3,4,1,2,3]


let result=intArr.reduce((acc,cuc)=>{
    acc[cuc]=(acc[cuc]||0)+1
    return acc
},{})
console.log(result);



