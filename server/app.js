import cors from 'cors'; //Cross origin ?? 
import dotenv from 'dotenv';
import express from 'express';

//Start Server 
const app = express() 
//Initialize port 
const port = process.env.PORT || 4000;

//Start and allow cross origin from the env file on my ip address 
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://127.0.0.1:5173' }));
app.use(express.json());

app.get("/health" , (req, res) => { 
    res.status(200).json({
    ok: true,
    service: "nextrole-api",
  });
});



export default app; 