import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Variety } from '../interfaces/variety';

@Component({
  selector: 'app-variety-modify',
  templateUrl: './variety-modify.component.html',
  styleUrls: ['./variety-modify.component.css']
})
export class VarietyModifyComponent implements OnInit {
  public varieties: Variety[] = [];
  public selectedVariety: Variety| undefined = undefined;
  public modifiedVariety: Variety = {
    nom: '',
    anneedemiseenmarche: 0,
    descriptionssemis: 'description',
    plantation: 'plantation',
    entretien: 'entretien',
    recolte: 'recolte',
    periodemiseenplace: 'Automne',
    perioderecolte: 'Hiver',
    commentairegenerale: 'test',
  };
  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.getVarieties();
  }

  isSelectedVariety(variety: Variety) {
    return variety === this.selectedVariety;
  }

  selectVariety(variety: Variety) {
    this.selectedVariety = variety;
    this.modifiedVariety = {...variety};
    console.table(this.modifiedVariety);
  }

  modifyVariety(variety: Variety) {
    this.selectedVariety = undefined;
    this.communicationService.patchVariety(variety.nom, variety).subscribe(() => {
      this.refresh();
    });
  }

  private refresh() {
    this.getVarieties();
  }

  private getVarieties() {
    this.communicationService
    .getVarieties()
    .subscribe((varieties: Variety[]) => {
      this.varieties = varieties;
    });
  }
}
