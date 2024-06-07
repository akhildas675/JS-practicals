let arr=[1,2,3,4,5,6,7,7,8,8,8,9,9,7,66,4,4,34,5,4]

let result=arr.reduce((acc,cuc)=>{
    if(acc<cuc){
        return acc
    }else{
        return cuc
    }
})

// let result=arr.reduce((acc,cucc)=>acc<cucc?acc:cucc)
console.log(result);




