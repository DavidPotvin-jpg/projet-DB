import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { HotelPK } from "../../../../common/tables/HotelPK";
import { Room } from "../../../../common/tables/Room";
import { CommunicationService } from "../communication.service";
import { Variety } from "../interfaces/variety";

@Component({
  selector: "app-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.css"],
})

export class RoomComponent implements OnInit {
  public hotelPKs: HotelPK[] = [];
  public rooms: Room[] = [];
  public duplicateError: boolean = false;
  public invalidHotelPK: boolean = false;
  public selectedHotel: HotelPK = {
    hotelnb: "-1",
    name: "placeholderHotel",
  };

  public varieties: Variety[] = [];
  public selectedVariety: string = 'random Name';


  @ViewChild("newRoomNb") newRoomNb: ElementRef;
  @ViewChild("newRoomType") newRoomType: ElementRef;
  @ViewChild("newRoomPrice") newRoomPrice: ElementRef;

  public constructor(private communicationService: CommunicationService) {}

  public ngOnInit(): void {
    this.getVarieties();
  }

  public getVarieties() {
    this.communicationService
    .getVarieties()
    .subscribe((varieties: Variety[]) => {
      this.varieties = varieties;
    });
  }
}
