// src/models/player_response.interface.ts
import { BatStatistics } from "./bat_stats.interface";
import { PitchStatistics } from "./pitch_stats.interface";

export interface PlayerResponse {
  bat_stats: BatStatistics;
  pitch_stats: PitchStatistics;
  full_name: string;
  starting_date: Date;
  team_list: TeamArray;
  bat_hand: string;
  pitch_hand: string;
}

interface TeamArray {
    [index:number]: string;
}