import { Component, ElementRef, ViewChild } from "@angular/core";
import { Garden } from "../interfaces/garden";
import { CommunicationService } from "./../communication.service";
import { GardenContent } from "../interfaces/garden-content";

@Component({
  selector: "app-hotel",
  templateUrl: "./hotel.component.html",
  styleUrls: ["./hotel.component.css"],
})
export class HotelComponent {
  @ViewChild("newHotelNb") newHotelNb: ElementRef;
  @ViewChild("newHotelName") newHotelName: ElementRef;
  @ViewChild("newHotelCity") newHotelCity: ElementRef;

  public gardens: Garden[] = [];
  public gardenContent: GardenContent; 
  public duplicateError: boolean = false;

  public constructor(private communicationService: CommunicationService) {}

  public ngOnInit(): void {
    this.getGardens();
  }

  // TODO: rename for english title
  public showJardinDetails(garden: Garden) {
    this.communicationService.getGardenContent(garden.jardinid).subscribe((content: GardenContent) => { 
      this.gardenContent = content;
      console.table(this.gardenContent.parcelles[0]);
    });
  }

  public getGardens(): void {
    this.communicationService.getAllGardens().subscribe((gardens: Garden[]) => {
      this.gardens = gardens;
    });
  }

  }

