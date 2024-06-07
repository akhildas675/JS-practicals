
    setTimeout(function () {
        console.log("hey joel");
    }, 5000)

    // modern way 
    
    console.log("Start");
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is an asynchronous operation");
      }, 2000);
    });
    
    promise.then((result) => {
      console.log(result);
    });
    console.log("End");
    