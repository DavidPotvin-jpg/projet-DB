import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HotelComponent } from "./hotel/hotel.component";
import { RoomComponent } from "./room/room.component";
import { GuestComponent } from "./guest/guest.component";
import { VarietyHomeComponent } from "./variety-home/variety-home.component";
import { VarietyModifyComponent } from "./variety-modify/variety-modify.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "rooms", component: RoomComponent },
  { path: "hotels", component: HotelComponent },
  { path: "guests", component: GuestComponent },
  { path: "variety-home", component: VarietyHomeComponent},
  { path: "variety-modify", component: VarietyModifyComponent},
];
// TODO path : plants, gardens, varieties
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }