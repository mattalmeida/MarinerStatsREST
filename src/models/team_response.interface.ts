// src/models/team_response.interface.ts
import { BatStatistics } from "./bat_stats.interface";
import { PitchStatistics } from "./pitch_stats.interface";

export interface TeamResponse {
  bat_stats: BatStatistics;
  pitch_stats: PitchStatistics;
  full_name: string;
  players: PlayerArray
}

interface PlayerArray {
    [index:number]: string;
}