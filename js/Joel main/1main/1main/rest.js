function sum(num1,num2,...nums){
    let sum =0;
    for (let x of nums) {
        sum=sum+x;        
    }
    console.log(num1+num2+sum);
}
sum(10,40,30,40,40,40,40,40,40,)