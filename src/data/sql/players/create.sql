CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS players
(
    id VARCHAR PRIMARY KEY,
    full_name VARCHAR,
    starting_date VARCHAR,
    nicknames VARCHAR,
    team_list VARCHAR,
    bat_stat_id uuid,
    pitch_stat_id uuid,
    bat_hand VARCHAR(1),
    pitch_hand VARCHAR(1)
)