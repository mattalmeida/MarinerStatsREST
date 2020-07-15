import * as promise from 'bluebird';
import * as dbConfig from '../db-config.json'; // db connection details
import * as pgPromise from 'pg-promise'; // pg-promise core library
import {Diagnostics} from './diagnostics';
import {IInitOptions, IDatabase, IMain} from 'pg-promise';
import {
    IExtensions,
    TeamsRepository,
    PlayersRepository,
    PitchStatsRepository,
    BatStatsRepository
} from './repos';

type ExtendedProtocol = IDatabase<IExtensions> & IExtensions;

// pg-promise initialization options:
const initOptions: IInitOptions<IExtensions> = {

    // Using a custom promise library, instead of the default ES6 Promise:
    promiseLib: promise,

    // Extending the database protocol with custom repositories;
    extend(obj: ExtendedProtocol, dc: any) {
        obj.bat_stats = new BatStatsRepository(obj, pgp);
        obj.pitch_stats = new PitchStatsRepository(obj, pgp);
        obj.players = new PlayersRepository(obj, pgp);
        obj.teams = new TeamsRepository(obj, pgp);
    }
};

// Initializing the library:
const pgp: IMain = pgPromise(initOptions);

// Creating the database instance with extensions:
const db: ExtendedProtocol = pgp(dbConfig);

// Initializing optional diagnostics:
Diagnostics.init(initOptions);

export {db, pgp};