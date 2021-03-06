import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientsResolver } from '../shared/resolvers/Patients.resolver';
import { PatientResolver } from '../shared/resolvers/Patient.resolver';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { AddPatientComponent } from './add-patient/add-patient.component';


const routes: Routes = [
  {path:'', component: HomeComponent,
  children:[
   
    {path: '', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)},
    {path: 'list', component: PatientListComponent, 
    resolve:{ patientList: PatientsResolver}, canActivate: [AuthGuard]},
  {path: 'add', component: AddPatientComponent},
  {path: 'patients/:patientId', component: PatientDetailsComponent, resolve: { patient: PatientResolver}},
  
  ]
  },
  {path: '/', redirectTo: '', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
