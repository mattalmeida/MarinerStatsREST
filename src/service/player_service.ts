import { PlayerResponse } from "./models.player_response.interface";

export const findNames = async (): Promise<List<String>> => {

  const nameList: List<String> = ...

  if (nameList) {
    return nameList;
  }

  throw new Error("No record found");
}

export const find = async (player_id: String): Promise<PlayerResponse> => {
  const playerResponse: PlayerResponse = ...;

  if (playerResponse) {
    return playerResopnse;
  }

  throw new Error("No record found");
};

export const findStat = async (player_id: String, statistic: String): Promise<String> => {
  const playerResponse: PlayerResponse = ...;

    if (playerResponse) {
      return player_response.getOrElse(statistic, "No statistic of type " + statistic + " exists for this player");
    }

    throw new Error("No record found for player " + player_id);
}
