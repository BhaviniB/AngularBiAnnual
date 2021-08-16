// import { FormBuilder, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Component, OnInit } from '@angular/core';
// import { Patient } from 'src/app/shared/models/Patient';
// import { PatientService } from 'src/app/shared/services/Patient.service';

// @Component({
//   selector: 'app-add-patient',
//   templateUrl: './add-patient.component.html',
//   styleUrls: ['./add-patient.component.css']
// })
// export class AddProductComponent implements OnInit {
//   patient: Patient;
//   addForm;
//   constructor(private route: ActivatedRoute,private  formBuilder: FormBuilder, private router: Router,
//     private productService: PatientService) { }

//   ngOnInit(): void {
//     debugger
//     // this.route.data.subscribe((data) => {
//       // this.patient = data.patient;
//       this.addForm = this.formBuilder.group({
//         name: this.formBuilder.control('', [Validators.required]),
//         desc: this.formBuilder.control('', [Validators.required]),
//         quantity: this.formBuilder.control('', [Validators.required]),
//         mrp: this.formBuilder.control('', [Validators.required])
//       });
//     // });


//   }
//   submitAddForm(value){
//     let patient: Patient ={
//       id: value.id,
//       patientName: value.patientName,
//       gender: value.gender,
//       address: value.address,
//       age: value.age,
//       city: value.city,
//       mobileNo: value.mobileNo
//     }
//     this.productService.addPatient(patient).subscribe(data => {
//     });
//       this.router.navigateByUrl('/');
//       this.addForm.reset();
//     }
  

// }
