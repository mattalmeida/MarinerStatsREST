import dotenv from "dotenv";
import express from "express";
import app from './app'

dotenv.config();

const port = process.env.SERVER_PORT;

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );