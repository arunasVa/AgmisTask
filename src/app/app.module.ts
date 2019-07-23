import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdentificationComponent } from './pages/identification/identification.component';
import { CurrentLocationComponent } from './pages/current-location/current-location.component';
import { TechHelpComponent } from './pages/tech-help/tech-help.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IdentificationComponent,
    CurrentLocationComponent,
    TechHelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
