import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GardenContent } from 'src/app/interfaces/garden-content';


@Component({
  selector: 'app-jardin-details',
  templateUrl: './jardin-details.component.html',
  styleUrls: ['./jardin-details.component.css']
})
export class JardinDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public gardenContent: GardenContent, private dialogRef: MatDialogRef<JardinDetailsComponent>) {
  }
  
  closeDialog() {
    this.dialogRef.close();
}
}
