import { injectable } from "inversify";
import * as pg from "pg";
import { DatabaseQuery } from "./constants/querries";
import "reflect-metadata";
import { Variety } from "../interfaces/variety";

@injectable()
export class DatabaseService {

  // TODO: A MODIFIER POUR VOTRE BD
  public connectionConfig: pg.ConnectionConfig = {
    user: "postgres",
    database: "postgres",
    password: "Admin",
    port: 5432,
    host: "127.0.0.1",
    keepAlive: true
  };

  public pool: pg.Pool = new pg.Pool(this.connectionConfig);


  // US
  public async getAllFromTable(tableName: string): Promise<pg.QueryResult> {
    return this.executeQuery(DatabaseQuery.getAllTable + `${tableName} ;`);
  }
  public async getGardenContent(gardenId: string): Promise<pg.QueryResult> {
    return this.executeQuery(DatabaseQuery.getGardenContent, [...arguments]);
  }
  public async getVarietyDetails(varietyName: string): Promise<pg.QueryResult> {
    return this.executeQuery(DatabaseQuery.getVarietyDetails, [...arguments]);
  }
  public async insertVariety(variety: Variety): Promise<pg.QueryResult> {
      return this.executeQuery(DatabaseQuery.insertVariety, [variety.nom, variety.anneeDeMiseEnMarche, variety.descriptionsSemis,
        variety.plantation, variety.entretien, variety.recolte, variety.periodeMiseEnPlace,
        variety.periodeRecolte, variety.commentaireGenerale]);
  }
  public async updateVariety(variety: Variety): Promise<pg.QueryResult> {
      return this.executeQuery(
        DatabaseQuery.updateVarietyInformation, 
        [variety.nom, variety.anneeDeMiseEnMarche, variety.descriptionsSemis,
         variety.plantation, variety.entretien, variety.recolte, variety.periodeMiseEnPlace,
         variety.periodeRecolte, variety.commentaireGenerale]);
  }
  public async deleteVariety(varietyName: string): Promise<pg.QueryResult> {
    return this.executeQuery(DatabaseQuery.deleteVariety, [...arguments]);
  }
  public async searchVariety(nameContent: string): Promise<pg.QueryResult> {
    return this.executeQuery(`${DatabaseQuery.searchVariety} '%${nameContent}%';`);
  }
  public async searchPlant(nameContent: string): Promise<pg.QueryResult> {
    return this.executeQuery(`${DatabaseQuery.searchPlant} '%${nameContent}%';`);
  }
  private async executeQuery(query: string, data?: any): Promise<pg.QueryResult> {
    try {
      console.table(query)
      const client = await this.pool.connect();
      const res =  data? await client.query(query, data) : await client.query(query);
      client.release()
      return res;

    } catch(error) {
      console.table(error);
      return error;
    }
  }

}
