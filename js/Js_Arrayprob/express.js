


const express=require('express')

const app=express()

const port=7000


app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})



app.get('/joel',(req,res)=>{
    res.send([
        {
            name:'Joel Francis',
            age:19,
            place:"Cheranalloor"


        }
    ])
})