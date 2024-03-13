import express from 'express';

const PORT=5000;

const app=express();

app.get('/',(req,res)=>{
    res.send("Working");
});

app.listen(PORT,()=>{
    console.log(`Listening at http://localhost:${PORT}`);
})