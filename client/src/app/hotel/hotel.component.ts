import { Component, ElementRef, ViewChild } from "@angular/core";
import { Garden } from "../interfaces/garden";
import { CommunicationService } from "./../communication.service";
import { MatDialog } from '@angular/material/dialog';
import { JardinDetailsComponent } from "./jardin-details/jardin-details.component";
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
  private gardenContent: GardenContent;  public duplicateError: boolean = false;

  public constructor(private communicationService: CommunicationService, private dialog: MatDialog) {}

  public ngOnInit(): void {
    this.getHotels();
  }
  // TODO: rename for english title
  public showJardinDetails(garden: Garden) {
    // let gardenContent: GardenContent;
    this.communicationService.getGardenContent(garden.jardinid).subscribe((content: GardenContent) => { this.gardenContent = content;});
    this.dialog.open(JardinDetailsComponent, {
      width: "1000px",
      height: "1000px",
      autoFocus: true,
      data: this.gardenContent,
  });

  }
  public getHotels(): void {
    this.communicationService.getAllGardens().subscribe((gardens: Garden[]) => {
      this.gardens = gardens;
    });
  }

  }

