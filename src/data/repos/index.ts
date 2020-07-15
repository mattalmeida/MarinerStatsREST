import {BatStatsRepository} from './bat_stats';
import {PitchStatsRepository} from './pitch_stats';
import {PlayersRepository} from "./players";
import {TeamsRepository} from "./teams";

// Database Interface Extensions:
interface IExtensions {
    bat_stats: BatStatsRepository,
    pitch_stats: PitchStatsRepository,
    players: PlayersRepository,
    teams: TeamsRepository
}

export {
    IExtensions,
    BatStatsRepository,
    PitchStatsRepository,
    PlayersRepository,
    TeamsRepository
};