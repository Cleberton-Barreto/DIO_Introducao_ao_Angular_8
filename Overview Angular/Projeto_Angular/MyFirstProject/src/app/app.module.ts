import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcaFundo } from './shared/directive/marca-fundo.directive';
import { MarcaTextoDirective } from './shared/directive/marca-texto.directive';
import { PeopleService } from './shared/services/people.service';
import { ListPeopleComponent } from './shared/components/list-people/list-people.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective,
    MarcaFundo,
    ListPeopleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
