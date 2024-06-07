

const http=require("http")
const { json } = require("stream/consumers")
const port=3000


const server=http.createServer((req,res)=>{

    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end("home page")
    }else if(req.url==='/about'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end("About Page")
    }else if(req.url==="/joel"){
        const name={
            firstName:"Joel",
            age:24
        }
    
        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(JSON.stringify(name))

    }else{
        res.writeHead(404,{"Content_Type":"text/plain"})
        res.end("page not found")
    }

    

})

server.listen(port,()=>{
    console.log(`listening on http://localhost:3000`)
})