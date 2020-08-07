import dotenv from "dotenv";
import fs from "fs-extra";
import { Client } from "pg";
import { ParquetSchema, ParquetWriter, ParquetReader } from 'parquets';

const init = async () => {
    dotenv.config();

    const client = new Client();
    try {
        await client.connect();
        const sql = await fs.readFile( "./database/initdb.pgsql", { encoding: "UTF-8" } );
        const statements = sql.split( /;\s*$/m );
        for ( const statement of statements ) {
            if ( statement.length > 3 ) {
                await client.query( statement );
            }
        }
    } catch ( err ) {
        console.log( err );
        throw err;
    } finally {
        await client.end();
    }
};

const buildParquets = async () => {
    // Initially just replace, later check for recency and append new data

}

const loadDB = async () => {

}

init().then( () => {
    console.log( "finished" );
} ).catch( () => {
    console.log( "finished with errors" );
} );