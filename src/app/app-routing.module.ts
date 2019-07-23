import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificationComponent } from './pages/identification/identification.component';
import { CurrentLocationComponent } from './pages/current-location/current-location.component';
import { TechHelpComponent } from './pages/tech-help/tech-help.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/identification', pathMatch: 'full' },
  {
    path: 'identification',
    component: IdentificationComponent,
    children: [
      {
        path: 'current-location',
        component: CurrentLocationComponent,
        children: [
          { path: 'tech-help', component: TechHelpComponent }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
