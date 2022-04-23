import { Component } from "@angular/core";
import { CommunicationService } from "../communication.service";
import { Plant } from "../interfaces/plant";

@Component({
  selector: "app-room",
  templateUrl: "./guest.component.html",
  styleUrls: ["./guest.component.css"],
})
export class GuestComponent {

  public duplicateError: boolean = false;
  
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
