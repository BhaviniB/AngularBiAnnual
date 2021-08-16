import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from '../models/Patient';
import { PatientService } from '../services/Patient.service';

@Injectable({
  providedIn: 'root',
})
export class PatientResolver implements Resolve<Patient> {
  constructor(
    private readonly patientService: PatientService,
    private router: Router
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Patient> {
      debugger
    const pid = route.paramMap.get('patientId');
   
    return this.patientService.getPatientById(
        pid != null ? pid : ''
    );
  }
}
