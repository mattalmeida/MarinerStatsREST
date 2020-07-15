INSERT INTO pitch_stats(
    stat_id,
    pitches,
    strikeouts,
    walks,
    hits,
    innings_pitched,
    wins,
    saves,
    earned_runs,
    earned_run_avg,
    home_runs
)
VALUES(
    ${statId},
    ${pitches},
    ${strikeouts},
    ${walks},
    ${hits},
    ${inningsPitched},
    ${wins},
    ${saves},
    ${earnedRuns},
    ${earnedRunAvg},
    ${homeRuns}
)
RETURNING *
