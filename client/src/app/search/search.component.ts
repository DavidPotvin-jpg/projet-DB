import { Component } from "@angular/core";
import { CommunicationService } from "../communication.service";
import { Plant } from "../interfaces/plant";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent {
  public duplicateError: boolean = false;
  public invalidHotelPK: boolean = false;
  
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
