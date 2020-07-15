export interface Player {
    id: string; //UUID?
    full_name: string;
    starting_date: string; //Special date format?
    nicknames: string;
    team_list: string;//Array?
    bat_stat_id: string;//UUID?
    pitch_stat_id: string;//UUID?
    bat_hand: string;//Char?
    pitch_hand: string;//Char?
}

export interface Team {
    team_id: string;
    player_list: string; //Can this be array??
    bat_stat_id: string;
    pitch_stat_id: string;
}

export interface BatStats {
    stat_id: string;
    at_bats: number;
    strikeouts: number;
    walks: number;
    bat_avg: bigint;
    runs: number;
    runs_batted_in: number;
    home_runs: number;
    on_base_percentage: bigint;
    slugging: bigint;
    stolen_bases: number;
}

export interface PitchStats {
    stat_id: string;
    pitches: number;
    strikeouts: number;
    walks: number;
    hits: number;
    innings_pitched: number;
    wins: number;
    saves: number;
    earned_runs: number;
    earned_run_avg: bigint;
    home_runs: number;
}