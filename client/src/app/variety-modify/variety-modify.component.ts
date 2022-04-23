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
  public seasons = [{ id: 1, name: 'Automne' },
    { id: 2, name: 'Hiver' },
    { id: 3, name: 'Printemps' },
    { id: 4, name: 'Été' }]

  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.getVarieties();
  }

  get canModify(): boolean {
    const seasonsName: string[] = this.seasons.map((season) => season.name);
    return seasonsName.includes(this.modifiedVariety.periodemiseenplace) && seasonsName.includes(this.modifiedVariety.perioderecolte)
  }

  isSelectedVariety(variety: Variety) {
    return variety === this.selectedVariety;
  }

  selectVariety(variety: Variety) {
    this.selectedVariety = variety;
    this.modifiedVariety = {...variety};
    console.table(this.modifiedVariety);
  }

  deselectVariety() {
    this.selectedVariety = undefined;
    this.reinitializeVariety();
  }

  modifyVariety() {
    if (!this.selectedVariety) return;
    this.communicationService.patchVariety(this.modifiedVariety.nom, this.modifiedVariety).subscribe(() => {
      this.refresh();
    });
    this.deselectVariety();
  }

  deleteVariety(varietyName: string) {
    this.communicationService.deleteVariety(varietyName).subscribe(() => {
      this.refresh();
    });
    this.deselectVariety();
  }

  private reinitializeVariety() {
    this.modifiedVariety = {
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
