import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Garden } from 'src/app/interfaces/garden';
import { RowContent } from 'src/app/interfaces/row-content';
import { CommunicationService } from 'src/app/communication.service';


@Component({
  selector: 'app-jardin-details',
  templateUrl: './jardin-details.component.html',
  styleUrls: ['./jardin-details.component.css']
})
export class JardinDetailsComponent {
  gardenContents: RowContent[];
  constructor(@Inject(MAT_DIALOG_DATA) public garden: Garden, private dialogRef: MatDialogRef<JardinDetailsComponent>, private communicationService: CommunicationService) {
    this.communicationService.getGarden(garden.jardinid).subscribe((content: RowContent[]) => this.gardenContents = content);
  }
  
  closeDialog() {
    this.dialogRef.close();
}
}
