import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/services/Patient.service';
import { Patient } from 'src/app/shared/models/Patient';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService
  ) {}
  Patients: Patient[];
  searchInput;
  cat: string;
  user: User = JSON.parse(sessionStorage.getItem('user'));

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.Patients = data.patientList;
    });
  }

  viewById(id: string): void {
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
      this.router.navigate(['/auth']);
    } else {
      this.router.navigateByUrl('patients/' + id);
    }
  }

  addPatient() {
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
      this.router.navigate(['/auth']);
    } else {
      this.router.navigateByUrl('/add');
    }
  }
}
