import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/Patient';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient: Patient;
  constructor(private route: ActivatedRoute, private router: Router,
   ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.patient = data.patient;
    });


  }

  

}
