const myObj ={
    a:1,
    b:2,
    c:  function (){
        
        console.log(this.b); 
    }
};

myObj.dob="20-20-2003"

console.log(myObj);

// var j = myObj.c;
myObj.c();