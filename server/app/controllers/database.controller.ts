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
    
    // ====== GARDENS ROUTES =====
    // GET path-to-server/database/gardens
    router.get("/gardens", async (req: Request, res: Response, _: NextFunction) => {
        try {
          const gardensTable = await this.databaseService.getAllFromTable('Jardin'); // TODO: enum for tables table
          res.json([...gardensTable.rows]);
          
        } catch (error) {
            console.error(error.message);
        }
    });
    router.get("/plants", async (req: Request, res: Response, _: NextFunction) => {
      try {
        const plantsTable = await this.databaseService.getAllFromTable('Plante');
        res.json([...plantsTable.rows]);

      } catch(error) {
        console.error(error.message);
      }

    });
    // https://stackoverflow.com/a/20386425
    router.get("/plants/names/:name", async (req: Request, res: Response, _: NextFunction) => {
      try {
        // TODO: handle empty info
        const name = req.params.name;
        const gardenRowsContents = await this.databaseService.searchPlant(name);
        res.json([...gardenRowsContents.rows]); // TODO this should not be an array
        
      } catch (error) {
          console.error(error.message);
      }
    });
    router.get("/gardens/:id", async (req: Request, res: Response, _: NextFunction) => {
      try {
        // TODO: handle empty info
        const id = req.params.id;
        const gardenRowsContents = await this.databaseService.getGardenContent(id);
        res.json([...gardenRowsContents.rows]);
        
      } catch (error) {
          console.error(error.message);
      }
  });

    return router;
  }
}
