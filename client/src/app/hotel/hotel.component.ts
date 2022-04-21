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
      // gardens.forEach((garden) => {
      //   // this.gardens.push({jardinId: garden.jardinid, typeSol: garden.typesol, nom: garden.nom, surface: garden.surface, estPotager: garden.estpotager, estVerger: garden.estverger, estOrnement: garden.estornement, hauteurMax: garden.hauteurmax, })
      //   console.table(garden);
      //   console.info(garden.jardinid);
      //   console.table({jardinId: garden.jardinId, typeSol: garden.typeSol, nom: garden.nom, surface: garden.surface, estPotager: garden.estPotager, estVerger: garden.estVerger, estOrnement: garden.estOrnement, hauteurMax: garden.hauteurMax, });
      // })
      // console.table(gardens);
      this.gardens = gardens;
      // console.log(this.gardens);
    });
    // this.gardens.push({jardinId: '0', typeSol: 'Sableux', nom: 'KillerQueen', surface: 69, estPotager: true, estVerger: false, estOrnement: false, hauteurMax: 420, })
  }

  }

