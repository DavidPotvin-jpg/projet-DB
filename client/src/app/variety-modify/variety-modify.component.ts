import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommunicationService } from '../communication.service';
import { Variety } from '../interfaces/variety';
import { VarietyModifyPopupComponent } from './variety-modify-popup/variety-modify-popup.component';

@Component({
  selector: 'app-variety-modify',
  templateUrl: './variety-modify.component.html',
  styleUrls: ['./variety-modify.component.css']
})
export class VarietyModifyComponent implements OnInit {
  public varieties: Variety[] = [];
  public selectedVariety: string = 'random Name';
  constructor(private communicationService: CommunicationService, private dialog: MatDialog) { }

  ngOnInit(): void {
    console.info('init');
    this.getVarieties();
  }

  openModifyPopUp(variety: Variety) {
    this.dialog.open(VarietyModifyPopupComponent, {
      width: "1000px",
      height: "1000px",
      autoFocus: true,
      data: variety,
  });
  }

  private getVarieties() {
    this.communicationService
    .getVarieties()
    .subscribe((varieties: Variety[]) => {
      this.varieties = varieties;
    });
  }
}
