import cookieParser from "cookie-parser";
import cors from 'cors';
import 'dotenv/config';
import express from 'express';

let CLIENT_URL
if (process.env.NODE_ENV === 'development') {
    CLIENT_URL = process.env.LOCAL_CLIENT
} else {
    CLIENT_URL = process.env.CLIENT
}

const applyMiddlewares = (app)=>{
    app.use(cors({
        origin: [CLIENT_URL]
    }))
    app.use(cookieParser())
    app.use(express.json())
}

export default applyMiddlewares
