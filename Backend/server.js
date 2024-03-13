import express from 'express';
import MedsRouter from './routes/MedsRoute.js'
const PORT=5000;

const app=express();

app.use('/api/meds',MedsRouter);

app.listen(PORT,()=>{
    console.log(`Listening at http://localhost:${PORT}`);
})