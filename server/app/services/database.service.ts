import { injectable } from "inversify";
import * as pg from "pg";
import "reflect-metadata";
import { DatabaseQuery } from "./constants/querries/sql-querries";
import { Variety } from "../interfaces/variety";
import { GardenContent } from "../interfaces/garden-content";

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
  
  public async getAllFromTable(tableName: string): Promise<pg.QueryResult> {
    return await this.executeQuery(DatabaseQuery.getAllTable + `${tableName} ;`);
  }

  public async getAllFromVariety(): Promise<pg.QueryResult> {
    return await this.executeQuery(DatabaseQuery.getAllTable + `Variete ORDER BY nom ;`);
  }
  public async getGardenContent(gardenId: string): Promise<GardenContent> {
    const rowContents = await this.executeQuery(DatabaseQuery.getRowContents, [...arguments]);
    const concernedRows =  await this.executeQuery(DatabaseQuery.getAllTable + `Rang WHERE jardinId = '${gardenId}' ;`);
    const parcels = await this.executeQuery(DatabaseQuery.getAllTable + `Parcelle WHERE jardinId = '${gardenId}' ;`);
    return {rows: concernedRows.rows, rowcontents: rowContents.rows, parcelles: parcels.rows };
  }
  public async getVarietyDetails(varietyName: string): Promise<pg.QueryResult> {
    return await this.executeQuery(DatabaseQuery.getVarietyDetails, [...arguments]);
  }
  public async insertVariety(variety: Variety): Promise<pg.QueryResult> {
      return await this.executeQuery(DatabaseQuery.insertVariety, [variety.nom, variety.anneedemiseenmarche, variety.descriptionssemis,
        variety.plantation, variety.entretien, variety.recolte, variety.periodemiseenplace,
        variety.perioderecolte, variety.commentairegenerale]);
  }
  public async updateVariety(variety: Variety): Promise<pg.QueryResult> {
      return await this.executeQuery(
        DatabaseQuery.updateVarietyInformation, 
        [variety.nom, variety.anneedemiseenmarche, variety.descriptionssemis,
         variety.plantation, variety.entretien, variety.recolte, variety.periodemiseenplace,
         variety.perioderecolte, variety.commentairegenerale]);
  }
  public async deleteVariety(varietyName: string): Promise<pg.QueryResult> {
    console.info('delete variety');
    return await  this.executeQuery(DatabaseQuery.deleteVariety, [varietyName]);

  }
  public async searchVariety(nameContent: string): Promise<pg.QueryResult> {
    return await  this.executeQuery(`${DatabaseQuery.searchVariety} '%${nameContent}%';`);
  }
  public async searchPlant(nameContent: string): Promise<pg.QueryResult> {
    return await this.executeQuery(`${DatabaseQuery.searchPlant} '%${nameContent}%';`);
  }
  private async executeQuery(query: string, data?: any): Promise<pg.QueryResult> {
    try {
      console.info(query);
      const client = await this.pool.connect();
      const res =  data? await client.query(query, data) : await client.query(query);
      client.release()
      return res;

    } catch(error) {
      console.error(error);
      return error;
    }
  }
}
