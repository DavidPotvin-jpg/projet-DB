import { Component, ElementRef, ViewChild } from "@angular/core";
import { Garden } from "../interfaces/garden";
import { CommunicationService } from "./../communication.service";

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
  public duplicateError: boolean = false;

  public constructor(private communicationService: CommunicationService) {}

  public ngOnInit(): void {
    this.getHotels();
  }

  public getHotels(): void {
    this.communicationService.getAllGardens().subscribe((gardens: Garden[]) => {
      this.gardens = gardens;
    });
    this.gardens.push({gardenId: '0', typeSol: 'Sableux', name: 'KillerQueen', area: 69, isVegetableGarden: true, isOrchardGarden: false, isOrnament: false, maxHeight: 420, })
  }

  }

