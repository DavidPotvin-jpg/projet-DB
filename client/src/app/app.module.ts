import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommunicationService } from "./communication.service";
import { VarietyHomeComponent } from "./variety-home/variety-home.component";
import { VarietyModifyComponent } from './variety-modify/variety-modify.component';
import { AddVarietyPageComponent } from './add-variety-page/add-variety-page.component';
import { JardinsComponent } from "./jardins/jardins.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
  declarations: [
    AppComponent,
    VarietyHomeComponent,
    VarietyModifyComponent,
    AddVarietyPageComponent,
    JardinsComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
