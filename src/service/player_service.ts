import { BatStatsData, PitchStatsData, PlayerData } from ".data/data_models";
import { BatStatRepository, PitchStatRepository, PlayerRepository } from "./data/repos";
import { BatStatResponse, PitchStatResponse, PlayerResponse } from "./models.player_response.interface";

export const findNames = async (): Promise<List<String>> => {

  const nameList: List<String> = PlayerRepository.retrievePlayerNames();

  if (nameList) {
    return nameList;
  }

  throw new Error("No player name data found");
}

export const find = async (player_id: String): Promise<PlayerResponse> => {
  const playerData: PlayerData = PlayerRepository.findById(player_id);
  playerResponse = playerResponseConverter(playerData);

  if (playerResponse) {
    return playerResponse;
  }

  throw new Error("No record found");
};

export const findStat = async (player_id: String, statistic: String): Promise<String> => {
  const playerData: PlayerData = PlayerRepository.findById(player_id);
  // if stat in bat/pitch, resolve to that response model
  // leverage bat/pitch Statistics repo to return data and then transform to response model
  if (playerData) {
    return Promise.of(playerData.getOrElse(statistic, "No statistic of type " + statistic + " exists for this player")); // Make this a promise && Or else throw?
  }

  throw new Error("No record found for player " + player_id);
}

const playerResponseTransformer = async (inner_player: Player): PlayerResponse => {
  let playerResponse: PlayerResponse = {
                                          bat_stats: transformBatResponse(BatStatRepository.findById(inner_player.bat_stats));
                                          pitch_stats: transformPitchResponse(PitchStatRepository.findById(inner_player.pitch_stats));
                                          full_name: inner_player.full_name;
                                          starting_date: inner_player.starting_date;
                                          team_list: inner_player.team_list;
                                          bat_hand: inner_player.bat_hand;
                                          pitch_hand: inner_player.pitch_hand;
                                       }
  return playerResponse;
}

const batStatisticFetch = async (bat_stats: String): BatStatResponse => {
  const batResponse: BatStatsData = BatStatRepository.findById(bat_stats);

  if (batResponse) {
    return transformBatResponse(batResponse);
  }

  return null;
}

const pitchStatisticFetch = async (pitch_stats: String): PitchStatResponse => {
  const pitchResponse: PitchStatsData = PitchStatRepository.findById(pitch_stats);

  if (pitchResponse) {
    return transformPitchResponse(pitchResponse);
  }

  return null; //TODO What to return here so we have proper empty monad?
}

const transformBatResponse = (bat_stats: BatStatsData): BatStatResponse => {

}

const transformPitchResponse = (pitch_stats: PitchStatsData): PitchStatResponse => {

}
