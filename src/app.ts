import path from "path";
import express from 'express';
import * as routes from "./routes";

const app = express();

app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// Configure routes
routes.register( app );

export default app;