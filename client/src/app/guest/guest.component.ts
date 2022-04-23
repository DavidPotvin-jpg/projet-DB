import { Component } from "@angular/core";
import { HotelPK } from "../../../../common/tables/HotelPK";
import { Room } from "../../../../common/tables/Room";
import { Guest } from "../../../../common/tables/Guest";
import { CommunicationService } from "../communication.service";
import { FormGroup } from "@angular/forms";
import { Plant } from "../interfaces/plant";

@Component({
  selector: "app-room",
  templateUrl: "./guest.component.html",
  styleUrls: ["./guest.component.css"],
})
export class GuestComponent {
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
  public searchInput: string = '';
  public plants: Plant[] = [];

  public constructor(private communicationService: CommunicationService) {
  }

  public searchPlant() {
    this.communicationService.searchPlant(this.searchInput).subscribe( (plants: Plant[]) => {
      this.plants = plants;
    });
  }

}
