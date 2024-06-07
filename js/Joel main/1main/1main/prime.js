const arr = [1,2,3,4,5,6,7,8,9,10]

for(var i=0;i<arr.length;i++){
    var flag=1;

    if (arr[i] <= 1)
    flag= 0;
for(var j=2;j<=arr[i]/2;j++){
  
    if(arr[i]%j===0){
        flag=0;
        break;
    }
}

if (flag==1){
    console.log(arr[i]);
}
}
// else{
//     console.log("not a prime number");
// }

