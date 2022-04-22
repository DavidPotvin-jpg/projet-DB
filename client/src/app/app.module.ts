import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommunicationService } from "./communication.service";
import { GuestComponent } from "./guest/guest.component";
import { HotelComponent } from "./hotel/hotel.component";
import { RoomComponent } from "./room/room.component";
import { VarietyHomeComponent } from "./variety-home/variety-home.component";
import { VarietyModifyComponent } from './variety-modify/variety-modify.component';
import { JardinDetailsComponent } from './hotel/jardin-details/jardin-details.component';
import { VarietyModifyPopupComponent } from './variety-modify/variety-modify-popup/variety-modify-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AddVarietyPageComponent } from './add-variety-page/add-variety-page.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    HotelComponent,
    GuestComponent,
    VarietyHomeComponent,
    VarietyModifyComponent,
    AddVarietyPageComponent,
    JardinDetailsComponent,
    VarietyModifyPopupComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
