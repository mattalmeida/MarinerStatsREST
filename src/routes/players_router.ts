import express, { Request, Response } from "express";
import * as PlayerService from "./service.player_service";
import { PlayerResponse } from "./models.player_response.interface";

export const playersRouter = express.Router();

// GET players

playersRouter.get("/", async (req: Request, res: Response) => {
  try {
    //const response: [PlayerResponse] = await PlayerService.findAll();

    res.render( "players" ); // ? Front end
    //res.status(200).send(response);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// GET players/all_names

playersRouter.get("/all_names", async (req: Request, res: Response) => {
  try {
    const response: [PlayerResponse] = await PlayerService.findNames();

    res.status(200).send(response);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// GET players/:player_id

playerRouter.get("/:player_id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const response: PlayerResponse = await PlayerService.find(player_id);

    res.status(200).send(response);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// GET players/:player_id/stat/:statistic

playerRouter.get("/:player_id/stat/:statistic", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {

    // statistic validator

    const response: PlayerResponse = await PlayerService.findStat(player_id, statistic);

    res.status(200).send(response);
  } catch (e) {
    res.status(404).send(e.message);
  }
});