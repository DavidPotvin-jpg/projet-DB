import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Variety } from '../interfaces/variety';

@Component({
  selector: 'app-add-variety-page',
  templateUrl: './add-variety-page.component.html',
  styleUrls: ['./add-variety-page.component.css']
})
export class AddVarietyPageComponent implements OnInit {
  public variety: Variety;
  public seasons: any[];
  public selectedSetupPeriod: number;
  public selectedHarvestPeriod: number;
  public varietyUploaded: boolean;
  public serverVarieties: Variety[];
  public errorMessage: string;
  constructor(private communicationService: CommunicationService) {
    this.variety = {
      nom: 'Legumieres',
      anneedemiseenmarche: 2022,
      descriptionssemis: 'Terre souple',
      plantation: 'Hautes herbes du Sud',
      entretien: 'Une fois par jour',
      recolte: 'Le soir',
      periodemiseEnPlace: '',
      perioderecolte: '',
      commentairegenerale: '',
  }
    this.seasons = [{ id: 1, name: 'Automne' },
    { id: 2, name: 'Hiver' },
    { id: 3, name: 'Printemps' },
    { id: 4, name: 'Été' }]
    this.selectedSetupPeriod = 1;
    this.selectedHarvestPeriod = 1;
    this.varietyUploaded = false;
    this.serverVarieties = [];
    this.errorMessage = '';
   }

  ngOnInit(): void {
  }
  addVariety(): void {
    this.errorMessage = '';
    this.variety.periodemiseEnPlace = this.seasons[this.selectedSetupPeriod].name;
    this.variety.perioderecolte = this.seasons[this.selectedHarvestPeriod].name;
    if (!this.isFormFilled()) {
      this.varietyUploaded = false;
      return;
    }
    if (!this.isVarietyUnique(this.variety.nom)) {
      this.errorMessage = 'Le nom de cette variété existe déjà dans la base de donnnées';
      return;
    }
    this.communicationService.addVariety(this.variety).subscribe();
    this.varietyUploaded = true;
    this.clearVariety();
  }
  isFormFilled(): boolean {
    return (this.variety.nom.length > 1 && this.variety.nom.length <= 30 &&
    this.variety.anneedemiseenmarche > 0 &&
    this.variety.descriptionssemis.length > 0 &&
     this.variety.plantation.length > 0 && this.variety.plantation.length <= 50 &&
     this.variety.entretien.length > 0 && this.variety.entretien.length <= 50 && 
     this.variety.recolte.length > 0 && this.variety.recolte.length <= 50);
  }
  
  clearVariety() {
    this.selectedSetupPeriod = 1;
    this.selectedHarvestPeriod = 1;
    this.variety = {
      nom: 'Legumieres',
      anneedemiseenmarche: 2022,
      descriptionssemis: 'Terre souple',
      plantation: 'Hautes herbes du Sud',
      entretien: 'Une fois par jour',
      recolte: 'Le soir',
      periodemiseEnPlace: '',
      perioderecolte: '',
      commentairegenerale: '',
    }
  }

  isVarietyUnique(varietyName: string) {
    this.communicationService.getVarieties().subscribe( (result) => {
      this.serverVarieties = result;
    });
    if (!this.serverVarieties) return false;
    const result = this.serverVarieties.find(element => element.nom === varietyName);
    return result === undefined;
  }
}