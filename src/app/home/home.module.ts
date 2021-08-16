import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { PatientListComponent } from './patient-list/patient-list.component';
// import { AddPatientComponent } from './add-patient/add-patient.component';
// import { PatientDetailsComponent } from './patient-details/patient-details.component';


@NgModule({
  declarations: [HeaderComponent, HomeComponent, PatientListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
