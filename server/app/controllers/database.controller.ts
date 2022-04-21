import { NextFunction, Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import * as pg from "pg";

import { Hotel } from "../../../common/tables/Hotel";
import { HotelPK } from "../../../common/tables/HotelPK";
import { Room } from "../../../common/tables/Room";
import { Guest } from "../../../common/tables/Guest";

import { DatabaseService } from "../services/database.service";
import Types from "../types";
import { Variety } from "../interfaces/variety";

@injectable()
export class DatabaseController {
  public constructor(
    @inject(Types.DatabaseService) private databaseService: DatabaseService
  ) {}

  public get router(): Router {
    const router: Router = Router();

     // VARIETIES ROUTES
     router.delete("/varieties/:name", async (req: Request, res: Response, _: NextFunction) => {
      try {
        const name = req.params.name;
        await this.databaseService.deleteVariety(name);
        res.sendStatus(204);
      } catch(error) {
        console.error(error.message);
      }

    });
    router.post("/varieties", async (req: Request, res: Response, _: NextFunction) => {
      try {
        const variety: Variety = req.body;
        await this.databaseService.insertVariety(variety);
        res.status(200).send('variety inserted');
      } catch(error) {
        console.error(error.message);
      }

    });
    router.patch("/varieties/:name", async (req: Request, res: Response, _: NextFunction) => {
      try {
        const updatedVariety: Variety = req.body;
        updatedVariety.nom = req.params.name;
        await this.databaseService.updateVariety(updatedVariety);
        res.status(204).send();

      } catch(error) {
        console.error(error.message);
      }

    });
    router.get("/varieties", async (req: Request, res: Response, _: NextFunction) => {
      try {
        const varietyRowContents = await this.databaseService.getAllFromTable('Variete');
        res.json([...varietyRowContents.rows]);
        
      } catch (error) {
          console.error(error.message);
      }
    });
    
    return router;
  }
}
