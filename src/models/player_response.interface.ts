// src/models/player_response.interface.ts
import { BatStatResponse } from "./bat_stats.interface";
import { PitchStatResponse } from "./pitch_stats.interface";

export interface PlayerResponse {
  bat_stats: BatStatResponse;
  pitch_stats: PitchStatResponse;
  full_name: string;
  starting_date: Date;
  team_list: TeamArray;
  bat_hand: string;
  pitch_hand: string;
}

interface TeamArray {
    [index:number]: string;
}