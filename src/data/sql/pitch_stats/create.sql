CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS pitch_stats
(
    stat_id uuid PRIMARY KEY,
    pitches INTEGER,
    strikeouts INTEGER,
    walks INTEGER,
    hits INTEGER,
    innings_pitched INTEGER,
    wins INTEGER,
    saves INTEGER,
    earned_runs INTEGER,
    earned_run_avg NUMERIC(4,3),
    home_runs INTEGER
)