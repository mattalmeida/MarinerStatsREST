import {IDatabase, IMain} from 'pg-promise';
import {IResult} from 'pg-promise/typescript/pg-subset';
import {PlayerData} from '../data_models';
import {players as sql} from '../sql';

export class PlayersRepository {

    /**
     * @param db
     * Automated database connection context/interface.
     *
     * If you ever need to access other repositories from this one,
     * you will have to replace type 'IDatabase<any>' with 'any'.
     *
     * @param pgp
     * Library's root, if ever needed, like to access 'helpers'
     * or other namespaces available from the root.
     */
    constructor(private db: IDatabase<any>, private pgp: IMain) {

    }

    // Creates the table;
    async create(): Promise<null> {
        return this.db.none(sql.create);
    }

    // Drops the table;
    async drop(): Promise<null> {
        return this.db.none(sql.drop);
    }

    // Removes all records from the table;
    async empty(): Promise<null> {
        return this.db.none(sql.empty);
    }

    // Adds a new user, and returns the new object;
    async add(name: string): Promise<PlayerData> {
        return this.db.one(sql.add, name);
    }

    // Tries to delete a user by id, and returns the number of records deleted;
    async remove(id: number): Promise<number> {
        return this.db.result('DELETE FROM players WHERE id = $1', +id, (r: IResult) => r.rowCount);
    }

    // Tries to find a user from id;
    //param is really UUID
    async findById(id: string): Promise<PlayerData | null> {
        return this.db.oneOrNone('SELECT * FROM players WHERE stat_id = $1', +id);
    }

    async retrievePlayerNames(): Promise<List<String> | null> {
        return this.db.any('SELECT full_name FROM players')
    }
}