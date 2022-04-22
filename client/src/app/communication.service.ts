import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// tslint:disable-next-line:ordered-imports
import { of, Observable, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import { Hotel } from "../../../common/tables/Hotel";
import { Room } from "../../../common/tables/Room";
import { HotelPK } from "../../../common/tables/HotelPK";
import { Guest } from "../../../common/tables/Guest";
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


  public filter(filterBy: string): void {
    this._listners.next(filterBy);
  }

  public getHotels(): Observable<Hotel[]> {
    return this.http
      .get<Hotel[]>(this.BASE_URL + "/hotels")
      .pipe(catchError(this.handleError<Hotel[]>("getHotels")));
  }

  public insertHotel(hotel: Hotel): Observable<number> {
    return this.http
      .post<number>(this.BASE_URL + "/hotels/insert", hotel)
      .pipe(catchError(this.handleError<number>("insertHotel")));
  }

  public updateHotel(hotel: Hotel): Observable<number> {
    return this.http
      .put<number>(this.BASE_URL + "/hotels/update", hotel)
      .pipe(catchError(this.handleError<number>("updateHotel")));
  }

  public deleteHotel(hotelNb: string): Observable<number> {
    return this.http
      .post<number>(this.BASE_URL + "/hotels/delete/" + hotelNb, {})
      .pipe(catchError(this.handleError<number>("deleteHotel")));
  }

  public getHotelPKs(): Observable<HotelPK[]> {
    return this.http
      .get<HotelPK[]>(this.BASE_URL + "/hotels/hotelNb")
      .pipe(catchError(this.handleError<HotelPK[]>("getHotelPKs")));
  }

  public getRooms(hotelNb: string): Observable<Room[]> {
    return this.http
      .get<Room[]>(this.BASE_URL + `/rooms?hotelNb=${hotelNb}`)
      .pipe(catchError(this.handleError<Room[]>("getRooms")));
  }

  public insertRoom(room: Room): Observable<number> {
    return this.http
      .post<number>(this.BASE_URL + "/rooms/insert", room)
      .pipe(catchError(this.handleError<number>("inserHotel")));
  }

  public updateRoom(room: Room): Observable<number> {
    return this.http
      .put<number>(this.BASE_URL + "/rooms/update", room)
      .pipe(catchError(this.handleError<number>("updateRoom")));
  }

  public deleteRoom(hotelNb: string, roomNb: string): Observable<number> {
    return this.http
      .post<number>(this.BASE_URL + `/rooms/delete/${hotelNb}/${roomNb}`, {})
      .pipe(catchError(this.handleError<number>("deleteRoom")));
  }

  public getGuests(hotelNb: string, roomNb: string): Observable<Guest[]> {
    return this.http
      .get<Guest[]>(this.BASE_URL + `/guests/${hotelNb}/${roomNb}`)
      .pipe(catchError(this.handleError<Guest[]>("getGuests")));
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
