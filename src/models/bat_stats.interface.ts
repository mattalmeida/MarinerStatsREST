// src/models/bat_stats.interface.ts

export interface BatStatResponse {
  at_bats: number;
  hits: number;
  strike_outs: number;
  runs: number;
  rbi: number;
  home_runs: number;
  bat_avg: number;
  obp: number;
  ops: number;
  stolen_bases: number;
}