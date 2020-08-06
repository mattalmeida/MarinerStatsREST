import {IDatabase, IMain} from 'pg-promise';
import {IResult} from 'pg-promise/typescript/pg-subset';
import {TeamData} from '../data_models';
import {teams as sql} from '../sql';

export class TeamsRepository {

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

    // Adds a new record and returns the full object;
    // It is also an example of mapping HTTP requests into query parameters;
    async add(values: { team_id: string, player_list: string, bat_stat_id: string, pitch_stat_id: string }):
        Promise<TeamData> {
        return this.db.one(sql.add, {
            teamId: +values.team_id,
            playerList: values.player_list,
            batStatId: values.bat_stat_id,
            pitchStatId: values.pitch_stat_id
        });
    }

    // Tries to find a team from team id
    async find(values: { player_list: string, bat_stat_id: string, pitch_stat_id: string }):
        Promise<Team | null> {
        return this.db.oneOrNone(sql.find, {
            playerList: values.player_list,
            batStatId: values.bat_stat_id,
            pitchStatId: values.pitch_stat_id
        });
    }
}
    // // Adds a new record and returns the full object;
    //     // It is also an example of mapping HTTP requests into query parameters;
    //     async add(values: { userId: number, name: string }): Promise<Product> {
    //         return this.db.one(sql.add, {
    //             userId: +values.userId,
    //             productName: values.name
    //         });
    //     }
    //
    //     // Tries to delete a product by id, and returns the number of records deleted;
    //     async remove(id: number): Promise<number> {
    //         return this.db.result('DELETE FROM products WHERE id = $1', +id, (r: IResult) => r.rowCount);
    //     }
    //
    //     // Tries to find a user product from user id + product name;
    //     async find(values: { userId: number, name: string }): Promise<Product | null> {
    //         return this.db.oneOrNone(sql.find, {
    //             userId: +values.userId,
    //             productName: values.name
    //         });
    //     }
    //
    //     // Returns all product records;
    //     async all(): Promise<Product[]> {
    //         return this.db.any('SELECT * FROM products');
    //     }
    //
    //     // Returns the total number of products;
    //     async total(): Promise<number> {
    //         return this.db.one('SELECT count(*) FROM products', [], (data: { count: string }) => +data.count);
    //     }
