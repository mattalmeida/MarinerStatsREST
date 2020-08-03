import express, { Request, Response } from "express";
import * as PlayerService from "./service.player_service";
import { PlayerResponse } from "./models.player_response.interface";

export const playersRouter = express.Router();

// GET players

playersRouter.get("/", async (req: Request, res: Response) => {
  try {
    const response: [PlayerResponse] = await PlayerService.findAll();

    //res.render( "players" ); ? Front end
    res.status(200).send(response);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// GET players/all

playersRouter.get("/all", async (req: Request, res: Response) => {
  try {
    const response: [PlayerResponse] = await PlayerService.findAll();

    res.status(200).send(response);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// GET players/:player_id

playerRouter.get("/:player_id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const response: PlayerResponse = await PlayerService.find(id);

    res.status(200).send(response);
  } catch (e) {
    res.status(404).send(e.message);
  }
});