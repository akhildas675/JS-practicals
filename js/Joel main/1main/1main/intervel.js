let num=0;
let sum=setInterval(()=>{
    console.log(num);
    num++;


    if(num==11){
        clearInterval(sum);
    }
},1000);