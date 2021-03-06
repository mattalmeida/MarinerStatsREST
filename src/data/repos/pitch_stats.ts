import {IDatabase, IMain} from 'pg-promise';
import {IResult} from 'pg-promise/typescript/pg-subset';
import {PitchStatsData} from '../data_models';
import {pitch_stats as sql} from '../sql';

export class PitchStatsRepository {

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
    async add(name: string): Promise<PitchStatsData> {
        return this.db.one(sql.add, name);
    }

    // Tries to delete a user by id, and returns the number of records deleted;
    async remove(id: number): Promise<number> {
        return this.db.result('DELETE FROM pitch_stats WHERE id = $1', +id, (r: IResult) => r.rowCount);
    }

    // Tries to find a user from id;
    //param is really UUID
    async findById(id: string): Promise<PitchStatsData | null> {
        return this.db.oneOrNone('SELECT * FROM pitch_stats WHERE stat_id = $1', +id);
    }
}
//
//     // Initializes the table with some user records, and return their id-s;
//     async init(): Promise<number[]> {
//         return this.db.map(sql.init, [], (row: { id: number }) => row.id);
//     }
//
//     // Tries to find a user from name;
//     async findByName(name: string): Promise<User | null> {
//         return this.db.oneOrNone('SELECT * FROM users WHERE name = $1', name);
//     }
//
//     // Returns all user records;
//     async all(): Promise<User[]> {
//         return this.db.any('SELECT * FROM users');
//     }
//
//     // Returns the total number of users;
//     async total(): Promise<number> {
//         return this.db.one('SELECT count(*) FROM users', [], (a: { count: string }) => +a.count);
//     }
// }
