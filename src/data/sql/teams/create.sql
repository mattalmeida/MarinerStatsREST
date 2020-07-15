CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS teams
(
    team_id VARCHAR PRIMARY KEY,
    player_list VARCHAR,
    bat_stat_id uuid,
    pitch_stat_id uuid
)