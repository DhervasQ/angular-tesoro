import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './componentes/contador/contador.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { CardComponent } from './componentes/cards/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    CardsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
