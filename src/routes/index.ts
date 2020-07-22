import * as express from "express";

export const register = ( app: express.Application ) => {
    // define a route handler for the default home page
    app.get( "/", ( req: any, res ) => {
        res.render( "index" ); // Does it make sense to forward this to stats_search for now or vice versa?
    } );

    app.get("/stats_search", ( req: any, res ) => {
        res.render( "index" );
    } );

    app.get("/players", ( req: any, res ) => {
        res.render( "players" );
    } );

    app.get("/teams", ( req: any, res ) => {
        res.render( "teams" );
    })
}