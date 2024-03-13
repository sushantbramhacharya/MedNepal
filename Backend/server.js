import express from 'express';
import ProductRouter from './routes/ProductRoute.js'
const PORT=5000;

const app=express();

app.use('/meds',ProductRouter);

app.listen(PORT,()=>{
    console.log(`Listening at http://localhost:${PORT}`);
})