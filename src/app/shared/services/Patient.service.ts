import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/environments/api.service';
import { environment } from 'src/environments/environment';
import { Patient } from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  productUrl= environment.server_url+ '/patients/'

  constructor(private apiService: ApiService) { }
  
  getAllPatients() : Observable<Patient[]>{
    return this.apiService.get(this.productUrl)
  }
  getPatientById(id: string): Observable<Patient>{
    return this.apiService.get(this.productUrl + id);
  }

  updatePatient(product): Observable<Patient>{
    return this.apiService.put(this.productUrl + '/' + product.id, product);
  }
  deletePatient(id: string): Observable<Patient>{
    debugger;
    return this.apiService.delete(this.productUrl + '/' + id);
  }
  addPatient(ob: Patient): Observable<Patient>{
    return this.apiService.post(this.productUrl, ob);
  }
}
