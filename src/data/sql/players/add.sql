INSERT INTO players(
    id,
    full_name,
    starting_date,
    nicknames,
    team_list,
    bat_stat_id,
    pitch_stat_id,
    bat_hand,
    pitch_hand
)
VALUES(
    ${playerId},
    ${fullName},
    ${startingDate},
    ${nicknames},
    ${teamList},
    ${batStatId},
    ${pitchStatId},
    ${batHand},
    ${pitchHand}
)
RETURNING *
