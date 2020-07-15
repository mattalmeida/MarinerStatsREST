CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS bat_stats
(
    stat_id uuid PRIMARY KEY,
    at_bats INTEGER,
    hits INTEGER,
    strikeouts INTEGER,
    walks INTEGER,
    bat_avg NUMERIC(4,3),
    runs INTEGER,
    runs_batted_in INTEGER,
    home_runs INTEGER,
    on_base_percentage NUMERIC(4,3),
    slugging NUMERIC(4,3),
    stolen_bases INTEGER
)