import * as express from "express";

export const register = ( app: express.Application ) => {

    app.get( `/api/players/:player_id`, async ( req: any, res ) => {
        try {

            const player: PlayerResponse = await PlayerService.find(player_id);

            return res.json(  );
        } catch ( err ) {
            // tslint:disable-next-line:no-console
            console.error(err);
            res.json( { error: err.message || err } );
        }
    } );


}