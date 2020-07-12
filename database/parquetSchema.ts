import { ParquetSchema, ParquetWriter, ParquetReader } from 'parquets';

let userParquest = new ParquetSchema({
    playerID: { type: 'UTF8' },
    lastname: { type: 'UTF8' },
    firstname: { type: 'UTF8' },
    play_debut: { type: 'UTF8' },
    mgr_debut: { type: 'UTF8' },
    coach_debut: { type: 'UTF8' },
    ump_debut: { type: 'UTF8' }
});

let eventParquet = new ParquetSchema({
    gameID: { type: 'UTF8' },
    gameInfo: {
        fields: {
            visTeam: { type: 'UTF8' },
            homeTeam: { type: 'UTF8' },
            site: { type: 'UTF8' },
            date: { type: 'UTF8' },
            doubleHeader: { type: 'UTF8' },
            startTime: { type: 'UTF8' },
            dayNight: { type: 'UTF8' },
            usedh: { type: 'BOOLEAN' },
            umpHome: { type: 'UTF8' },
            ump1b: { type: 'UTF8' },
            ump2b: { type: 'UTF8' },
            ump3b: { type: 'UTF8' },
            how_scored: { type: 'UTF8' },
            pitches: { type: 'UTF8' },
            scorer: { type: 'UTF8' },
            temp: { type: 'INT32' },
            windDir: { type: 'UTF8' },
            windSpeed: { type: 'INT32' },
            fieldCond: { type: 'UTF8' },
            precip: { type: 'UTF8' },
            sky: { type: 'UTF8' },
            timeFrame: { type: 'INT32' },
            attendance: { type: 'INT32' },
            winningP: { type: 'UTF8' },
            losingP: { type: 'UTF8' },
            savingP: { type: 'UTF8' }
        }
    },
    starter: {
        repeated: true,
        fields: {
            playerId: { type: 'UTF8' },
            fullName: { type: 'UTF8' },
            atHome: { type: 'BOOLEAN' },
            batPosit: { type: 'INT32' },
            position: { type: 'INT32' }
        }
    },
    plays: {
        repeated: true,
        fields: {
            inning: { type: 'INT32' },
            top_bot: { type: 'INT32' },
            batter_playerID: { type: 'UTF8' },
            ending_pitch_count: { type: 'UTF8' },
            pitch_series: { type: 'UTF8' },
            scoring_vals: { type: 'UTF8' }
        }
    },
    com: { type: 'UTF8', repeated: true },
    sub: { type: 'UTF8', repeated: true },
    data: {
        repeated: true,
        fields: {
            type: { type: 'UTF8' },
            playerID: { type: 'UTF8' },
            error_num: { type: 'INT32' }
        }
    }
})