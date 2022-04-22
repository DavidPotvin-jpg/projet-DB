import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// tslint:disable-next-line:ordered-imports
import { of, Observable, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import { Variety } from "./interfaces/variety";
import { Garden } from "./interfaces/garden";
import { Plant } from "./interfaces/plant";
import {GardenContent} from "./interfaces/garden-content";
@Injectable()
export class CommunicationService {
  private readonly BASE_URL: string = "http://localhost:3000/database";
  public constructor(private http: HttpClient) {}

  private _listners: any = new Subject<any>();

  public listen(): Observable<any> {
    return this._listners.asObservable();
  }
 
  public deleteVariety(varietyName: string): Observable<Variety> {
    return this.http
      .delete<Variety>(`${this.BASE_URL}/varieties/${varietyName}`, {})
      .pipe(catchError(this.handleError<Variety>('deleteVariety')));
  }

  public addVariety(variety: Variety) {
    console.info(variety);
    return this.http.post<Variety>(`${this.BASE_URL}/varieties`, variety)
    .pipe(catchError(this.handleError<Variety>('addVariety')));
  }
  
  public patchVariety(varietyName: string, variety: Variety): Observable<Variety> {
    return this.http
      .patch<Variety>(`${this.BASE_URL}/varieties/${varietyName}`, {})
      .pipe(catchError(this.handleError<Variety>('patchVariety')));
  }
  
  public getVarieties(): Observable<Variety[]> {
    return this.http
      .get<Variety[]>(`${this.BASE_URL}/varieties`)
      .pipe(catchError(this.handleError<Variety[]>('getVarieties')));
  }

  public getGardenContent(id: string): Observable<GardenContent> {
    return this.http
      .get<GardenContent>(`${this.BASE_URL}/gardens/${id}`)
      .pipe(catchError(this.handleError<GardenContent>('getGardens')));
  }

  public getAllGardens(): Observable<Garden[]> {
    return this.http
      .get<Garden[]>(`${this.BASE_URL}/gardens`)
      .pipe(catchError(this.handleError<Garden[]>('getAllGardens')));
  }
  
  public searchPlant(nameContent: string): Observable<Plant[]> {
    return this.http
      .get<Plant[]>(`${this.BASE_URL}/plants/names/${nameContent}`)
      .pipe(catchError(this.handleError<Plant[]>('searchPlant')));
  }

  private handleError<T>(
    request: string,
    result?: T
  ): (error: Error) => Observable<T> {
    return (error: Error): Observable<T> => {
      return of(result as T);
    };
  }
}
