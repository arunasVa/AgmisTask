import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { CoordsService } from './services/coords.service';
import { CarIdentificationService } from './services/car-identification.service';

import { AppComponent } from './app.component';
import { IdentificationComponent } from './pages/identification/identification.component';
import { CurrentLocationComponent } from './pages/current-location/current-location.component';
import { TechHelpComponent } from './pages/tech-help/tech-help.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentificationComponent,
    CurrentLocationComponent,
    TechHelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSkQdGiEyatX84zgCt57RrTRKlhxfowgc'
    })
  ],
  providers: [CoordsService, CarIdentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
