INSERT INTO teams(
    team_id,
    player_list,
    bat_stat_id,
    pitch_stat_id
)
VALUES(
    ${teamId},
    ${playerList},
    ${batStatId},
    ${pitchStatId}
)
RETURNING *
