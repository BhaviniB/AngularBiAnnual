import { Patient } from './../models/Patient';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientService } from '../services/Patient.service';

@Injectable({
  providedIn: 'root',
})
export class PatientsResolver implements Resolve<Patient[]> {
  constructor(private patientService: PatientService) {}
  resolve(): Observable<Patient[]> {
    return this.patientService.getAllPatients();
  }
}
