const arr=[[{a:[1,2,3],b:29}]]
let arr1=arr[0][0].a;

let arr2=arr[0][0].b

let sum1=arr1.reduce((acc,val)=>{
    return acc+val;
},0)

console.log(sum1+arr2);
const obj={a:1,b:2}
const re=Object.entries(obj)
console.log(re);
const array=[1,23,4]
const res=Object.assign({},array)
console.log(res);

const array1=["aa","aaaaaaa","aaaaaaaaa","","a","aaaa"];
function sort(array){
    let temp;
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                temp=array[i];
                array[i]=array[j];
                array[j]=temp      
            }
        }
    }
    return array;
}
console.log(sort(["aa","aaaaaaa","aaaaaaaaa","","a","aaaa"]));

