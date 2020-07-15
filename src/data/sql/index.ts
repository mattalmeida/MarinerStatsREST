import {QueryFile, IQueryFileOptions} from 'pg-promise';

const path = require('path');

export const bat_stats = {
    create: sql('bat_stats/create.sql'),
    empty: sql('bat_stats/empty.sql'),
    init: sql('bat_stats/init.sql'),
    drop: sql('bat_stats/drop.sql'),
    add: sql('bat_stats/add.sql')
};

export const pitch_stats = {
    create: sql('pitch_stats/create.sql'),
    empty: sql('pitch_stats/empty.sql'),
    drop: sql('pitch_stats/drop.sql'),
    find: sql('pitch_stats/find.sql'),
    add: sql('pitch_stats/add.sql')
};

export const players = {
    create: sql('players/create.sql'),
    empty: sql('players/empty.sql'),
    init: sql('players/init.sql'),
    drop: sql('players/drop.sql'),
    add: sql('players/add.sql')
};

export const teams = {
    create: sql('teams/create.sql'),
    empty: sql('teams/empty.sql'),
    drop: sql('teams/drop.sql'),
    find: sql('teams/find.sql'),
    add: sql('teams/add.sql')
};

function sql(file: string): QueryFile {

    const fullPath: string = path.join(__dirname, file);

    const options: IQueryFileOptions = {
        minify: true
    };

    const qf: QueryFile = new QueryFile(fullPath, options);

    if (qf.error) {
        // Something is wrong with our query file :(
        // Testing all files through queries can be cumbersome,
        // so we also report it here, while loading the module:
        console.error(qf.error);
    }

    return qf;

    // See QueryFile API:
    // http://vitaly-t.github.io/pg-promise/QueryFile.html
}