import { Component, OnInit } from '@angular/core';
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
  constructor() {
    this.variety = {
      nom: '',
      anneedemiseenmarche: 2022,
      descriptionssemis: '',
      plantation: '',
      entretien: '',
      recolte: '',
      periodemiseEnPlace: '',
      perioderecolte: '',
      commentairegenerale: '',
  }
    this.seasons = 
    [{ id: 1, name: 'Automne' },
    { id: 2, name: 'Hiver' },
    { id: 3, name: 'Printemps' },
    { id: 4, name: 'Été' }]
    this.selectedSetupPeriod = 1;
    this.selectedHarvestPeriod = 1;
   }

  ngOnInit(): void {
  }
  addVariety(): void {
    console.log(this.selectedSetupPeriod);
    console.log(this.selectedHarvestPeriod);
    this.variety.periodemiseEnPlace = this.seasons[this.selectedSetupPeriod].name;
    this.variety.perioderecolte = this.seasons[this.selectedHarvestPeriod].name;
    console.log(this.variety);
  }

  // selectOption(id: number) {
  //   this.selectedSetupPeriod = id;
  //   //getted from event
  //   console.log(id);
  //   //getted from binding
  //   console.log(this.selectedSetupPeriod)
  // }

}
