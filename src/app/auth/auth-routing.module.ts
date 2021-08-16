import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from '../home/patient-list/patient-list.component';
import { PatientsResolver } from '../shared/resolvers/Patients.resolver';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'list', component: PatientListComponent, 
  resolve:{ patientList: PatientsResolver}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
