Promise1=new Promise((res,rej)=>{
    // res('Promise 1 Success')
    rej('Promise 1 Rejected')
  });
  
  Promise2=new Promise((res,rej)=>{
    // res('Promise 2 Succes')
    rej('Promise 2 Rejected')
  });
  
  Promise3 =new Promise((res,rej)=>{
    // res('Promise 3 Sucess')
    rej('Promise 3 Rejected')
  })
  
  
  const promisee=Promise.race([Promise1,Promise2,Promise3]);
  promisee.then((resolve)=>{
    console.log(resolve)
  })
  .catch((error)=>{
    console.log(error)
  })