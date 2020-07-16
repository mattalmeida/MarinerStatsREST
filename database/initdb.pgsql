-- Creates teams table
CREATE TABLE IF NOT EXISTS teams (
    team_id varchar PRIMARY KEY
    , bat_stat_id uuid
    , pitch_stat_id uuid
    , player_list varchar
);

-- Creates players table
CREATE TABLE IF NOT EXISTS players (
    player_id varchar NOT NULL PRIMARY KEY
    , full_name varchar NOT NULL
    , starting_date varchar NOT NULL
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
    , bat_avg NUMERIC(4,3)
    , runs INTEGER
    , runs_batted_in INTEGER
    , home_runs INTEGER
    , on_base_percentage NUMERIC(4,3)
    , slugging NUMERIC(4,3)
    , stolen_bases INTEGER
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
    , earned_runs INTEGER
    , earned_run_avg NUMERIC(4,3)
);