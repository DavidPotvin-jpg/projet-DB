import { Component, OnInit } from "@angular/core";
import { HotelPK } from "../../../../common/tables/HotelPK";
import { Room } from "../../../../common/tables/Room";
import { Guest } from "../../../../common/tables/Guest";
import { CommunicationService } from "../communication.service";
import { FormGroup } from "@angular/forms";
import { Plant } from "../interfaces/plant";

const fakePlant: Plant = {
  planteId : 'string',
  nomLatin : 'string',
  nomVariete : 'string',
  nom : 'string',
  categorie : 'string',
  type_: 'string',
  sousType: 'string'
}
@Component({
  selector: "app-room",
  templateUrl: "./guest.component.html",
  styleUrls: ["./guest.component.css"],
})
export class GuestComponent implements OnInit {
  public hotelPKs: HotelPK[] = [];
  public rooms: Room[] = [];
  public guests: Guest[] = [];

  public duplicateError: boolean = false;
  public invalidHotelPK: boolean = false;
  
  public chatForm: FormGroup;
  public selectedHotel: HotelPK = {
    hotelnb: "-1",
    name: "placeholderHotel",
  };

  public selectedRoom: Room = {
    hotelnb: "-1",
    roomnb: "-1",
    type: "",
    price: 0
  }
  public searchInput: string = 'hello';
  public plants: Plant[] = [fakePlant, fakePlant];

  public constructor(private communicationService: CommunicationService) {
  }

  public ngOnInit(): void {
    this.communicationService.getHotelPKs().subscribe((hotelPKs: HotelPK[]) => {
      this.hotelPKs = hotelPKs;
      this.selectedHotel = this.hotelPKs[0];
      this.getRooms();
    });
  }

  public updateSelectedHotel(hotelID: any) {
    this.selectedHotel = this.hotelPKs[hotelID];
    this.getRooms();
    this.refresh();
  }

  public updateSelectedRoom(roomID: any) {
    this.selectedRoom = this.rooms[roomID];
    this.refresh();
  }

  public getRooms(): void {
    this.communicationService
      .getRooms(this.selectedHotel.hotelnb)
      .subscribe((rooms: Room[]) => {
        this.rooms = rooms;
        this.selectedRoom = this.rooms[0];
      });
  }

  private refresh() {
    this.getGuests();
  }

  public getGuests(): void {
    this.communicationService
      .getGuests(this.selectedHotel.hotelnb, this.selectedRoom.roomnb)
      .subscribe((guests: Guest[]) => {
        this.guests = guests;
      });
  }
  public searchPlant() {
    this.communicationService.searchPlant(this.searchInput).subscribe( (plants: Plant[]) => {
      this.plants = plants;
    });
  }

}
