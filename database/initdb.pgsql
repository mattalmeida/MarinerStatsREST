-- Creates teams table
CREATE TABLE IF NOT EXISTS teams (
    team_id varchar PRIMARY KEY
    , stat_id uuid
    , player_list varchar
);

-- Creates players table
CREATE TABLE IF NOT EXISTS players (
    player_uuid uuid PRIMARY KEY
    , player_id_list varchar NOT NULL
    , full_name varchar NOT NULL
    , nicknames varchar
    , team_list varchar
    , bat_stat_id NULL
    , pitch_stat_id NULL
    , bat_hand char(1)
    , pitch_hand char(1)
);

-- Creates bat_stats table
CREATE TABLE IF NOT EXISTS bat_stats (
    stat_id uuid PRIMARY KEY
    , at_bats INTEGER
    , hits INTEGER
    , strikeouts INTEGER
    , walks INTEGER
    , runs INTEGER
    , runs_batted_in INTEGER
    , home_runs INTEGER
    , sac_fly INTEGER
    , first_base INTEGER
    , second_base INTEGER
    , third_base INTEGER
    , hit_by_pitch INTEGER
);

-- Creates pitch_stats table
CREATE TABLE IF NOT EXISTS pitch_stats (
    stat_id uuid PRIMARY KEY
    , pitches INTEGER
    , walks INTEGER
    , hits INTEGER
    , strikeouts INTEGER
    , innings_pitched INTEGER
    , wins INTEGER
    , saves INTEGER
    , runs INTEGER
    , runs_from_errors INTEGER
    , runs_from_passed_ball INTEGER
);