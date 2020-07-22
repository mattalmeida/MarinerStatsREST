import pgPromise from "pg-promise";

export const requestPlayer = async ( player_id: String ) => {
    const port = parseInt(process.env.PGPORT || "5432", 10);
    const config = {
        database: process.env.PGDATABASE || "postgres",
        host: process.env.PGHOST || "localhost",
        port,
        user: process.env.PGUSER || "postgres"
    };

    const pgp = pgPromise();
    const db = pgp(config);

    const player = await db.any( `
                SELECT
                    player_id
                    , full_name
                    , nicknames
                    , team_list
                    , bat_stat_id
                    , pitch_stat_id
                    , bat_hand
                    , pitch_hand
                FROM    players
                WHERE   player_id = $[playerId]`,
        { player_id: `%${ player_id }%` } );

    const pitchStats = await db.any(`
                SELECT
                    at_bats
                    , hits
                    , strike_outs
                    , walks
                    , bat_avg
                    , runs
                    , runs_batted_in
                    , home_run
                    , on_base_percentage
                    , slugging
                    , steals
                FROM    batting_statistics
                WHERE   stat_id = $[stat_id]`,
        { stat_id: player. } )
}