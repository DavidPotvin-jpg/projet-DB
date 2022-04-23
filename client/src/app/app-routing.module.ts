import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { VarietyHomeComponent } from "./variety-home/variety-home.component";
import { VarietyModifyComponent } from "./variety-modify/variety-modify.component";
import { AddVarietyPageComponent } from './add-variety-page/add-variety-page.component';
import { SearchComponent } from "./search/search.component";
import { JardinsComponent } from "./jardins/jardins.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "search", component: SearchComponent },
  { path: "jardins", component: JardinsComponent },
  { path: "variety-home", component: VarietyHomeComponent},
  { path: "variety-modify", component: VarietyModifyComponent},
  { path: "variety-add", component: AddVarietyPageComponent},
];
// TODO path : plants, gardens, varieties
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }