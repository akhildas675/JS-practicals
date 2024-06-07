let obj={a:10,b:20,c:30,c:50,d:40}


// let convert=Object.entries(obj)
// console.log(convert);

// convert.sort((a,b)=>a[1]-b[1])
// console.log(convert);

// let result=Object.fromEntries(convert)
// console.log(result);


let array=[];

for(let x in obj){
    array.push([x,obj[x]])
}
 for(let i=0;i<array.length-1;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i][1]>array[j][1]){
            let temp=array[i]
            array[i]=array[j]
            array[j]=temp
        }

    }
 }

 let sortObj={};

 for(let i=0;i<array.length;i++){
    sortObj[array[i][0]]=array[i][1]
 }
 console.log(sortObj);