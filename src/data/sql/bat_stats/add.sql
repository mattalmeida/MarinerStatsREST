INSERT INTO bat_stats(
    stat_id,
    at_bats,
    strikeouts,
    walks,
    bat_avg,
    runs,
    runs_batted_in,
    home_runs,
    on_base_percentage,
    slugging,
    stolen_bases
)
VALUES(
    ${statId},
    ${atBats},
    ${strikeouts},
    ${walks},
    ${bat_avg},
    ${runs},
    ${runs_batted_in},
    ${home_runs},
    ${on_base_percentage},
    ${slugging},
    ${stolen_bases}
)
RETURNING *
