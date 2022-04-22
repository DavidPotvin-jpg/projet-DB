import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommunicationService } from 'src/app/communication.service';
import { Variety } from 'src/app/interfaces/variety';

@Component({
  selector: 'app-variety-modify-popup',
  templateUrl: './variety-modify-popup.component.html',
  styleUrls: ['./variety-modify-popup.component.css']
})
export class VarietyModifyPopupComponent {
  gameForm: FormGroup;

  constructor(
  @Inject(MAT_DIALOG_DATA) public variety: Variety, 
  private dialogRef: MatDialogRef<VarietyModifyPopupComponent>, 
  private formBuilder: FormBuilder, 
  private communicationService: CommunicationService
  ) {
    this.gameForm = this.formBuilder.group({
      anneedemiseenmarche: ['2022', Validators.required],
      descriptionssemis: ['tres beau', Validators.required],
      plantation: ['plantation 1', Validators.required],
      entretien: ['entretien 2', Validators.required],
      recolte: ['recolte 2', Validators.required],
      periodemiseEnPlace: ['hiver', Validators.required],
      perioderecolte: ['automne', Validators.required],
      commentairegenerale: ['heyy wassup', Validators.required],
    })
  }

  modifyVariety() {
    this.communicationService.patchVariety(this.variety.nom, this.variety);
  }

  closeDialog() {
    console.info('closing dialog');
      this.dialogRef.close();
  }
}
