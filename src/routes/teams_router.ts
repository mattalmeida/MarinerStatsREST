import express, { Request, Response } from "express";
import * as TeamService from "./service.team_service";
import { TeamResponse } from "./models.team_response.interface";

export const teamsRouter = express.Router();

teamsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const response: [TeamResponse] = await TeamService.findAll();

    //res.render( "teams" ); Front end?
    res.status(200).send(response);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// GET teams/all

teamsRouter.get("/all", async (req: Request, res: Response) => {
  try {
    const response: [TeamResponse] = await TeamService.findAll();

    res.status(200).send(response);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// GET teams/:team_id

teamrRouter.get("/:team_id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const response: TeamResponse = await TeamService.find(id);

    res.status(200).send(response);
  } catch (e) {
    res.status(404).send(e.message);
  }
});