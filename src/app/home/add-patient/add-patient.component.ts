import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/Patient';
import { PatientService } from 'src/app/shared/services/Patient.service';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent implements OnInit {
  patient: Patient;
  addForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    // this.route.data.subscribe((data) => {
    // this.patient = data.patient;
    this.addForm = this.formBuilder.group({
      id: this.formBuilder.control('', [Validators.required]),
      patientName: this.formBuilder.control('', [Validators.required]),
      gender: this.formBuilder.control('', [Validators.required]),
      address: this.formBuilder.control('', [Validators.required]),
      age: this.formBuilder.control('', [Validators.required]),
      city: this.formBuilder.control('', [Validators.required]),
      mobileNo: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required]),
      hasFever: this.formBuilder.control(false, [Validators.required]),
      hasWeakness: this.formBuilder.control(false, [Validators.required]),
      hasHeadache: this.formBuilder.control(false, [Validators.required]),
      hasWeight: this.formBuilder.control(false, [Validators.required]),
      hasToothache: this.formBuilder.control(false, [Validators.required]),
      hasEyesight: this.formBuilder.control(false, [Validators.required]),
      hasSkin: this.formBuilder.control(false, [Validators.required]),
    });
    // });
  }
  submitAddForm(value) {
    let patient: Patient = {
      id: value.id,
      patientName: value.patientName,
      gender: value.gender,
      address: value.address,
      age: value.age,
      city: value.city,
      mobileNo: value.mobileNo,
      email: value.email,
      hasFever: value.hasFever,
      hasWeakness: value.hasWeakness,
      hasHeadache: value.hasHeadache,
      hasSkin: value.hasSkin,
      hasWeight: value.hasWeight,
      hasToothache: value.hasToothache,
      hasEyesight: value.hasEyesight,
      // symptoms: ['a','b']
    };

    this.patientService.addPatient(patient).subscribe((data) => {
      let a = this.patientService.getAllPatients();
      console.log(a);
      this.router.navigateByUrl('patients/' + value.id);
    });
    // this.router.navigateByUrl('/');
    this.addForm.reset();
  }
}
