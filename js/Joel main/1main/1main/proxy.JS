const game ={};

const gameProxy = new Proxy(game,{
    get:(o,properties)=>{
        console.log(o);
        console.log(properties);
    }
});

console.log(gameProxy.difficulty);