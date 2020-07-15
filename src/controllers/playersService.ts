import pgPromise from "pg-promise";

export class PlayersController {
    async requestPlayer = () => {
        
}
}

const requestPlayer = ( player_id: String ) => {
    const port = parseInt(process.env.PGPORT || "5432", 10);
    const config = {
        database: process.env.PGDATABASE || "postgres",
        host: process.env.PGHOST || "localhost",
        port,
        user: process.env.PGUSER || "postgres"
    };

    const pgp = pgPromise();
    const db = pgp(config);

    const players = await db.any( `
                SELECT
                    player_id
                    , full_name
                    , nicknames
                    , team_list
                    , bat_stat_id
                    , pitch_stat_id
                    , bat_hand
                    , pitch_hand
                FROM    guitars
                WHERE   player_id = $[playerId]`,
        { player_id: `%${ req.params.player_id }%` } );
}