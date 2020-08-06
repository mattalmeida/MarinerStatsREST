// src/models/pitch_stats.interface.ts

export interface PitchStatResponse {
  innings: number;
  hits: number;
  walks: number;
  strike_outs: number;
  earned_runs: number;
  home_runs: number;
  whip: number;
  era: number;
  wins: number;
  saves: number;
}