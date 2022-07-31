import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBidingComponent } from './shared/componets/data-biding/data-biding.component';

const routes: Routes = [
  {path: 'data-binding', component: DataBidingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
