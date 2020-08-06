// src/models/team_response.interface.ts
import { BatStatResponse } from "./bat_stats.interface";
import { PitchStatResponse } from "./pitch_stats.interface";

export interface TeamResponse {
  bat_stats: BatStatResponse;
  pitch_stats: PitchStatResponse;
  full_name: string;
  players: PlayerArray
}

interface PlayerArray {
    [index:number]: string;
}