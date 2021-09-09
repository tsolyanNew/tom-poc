import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPatientSummary } from './api/patient-summary.interface';
import * as PatientSummaryActions from './api/patient-summary.actions'

@Component({
  selector: 'patient-summary',
  templateUrl: './patient-summary.component.html',
  styleUrls: ['./patient-summary.component.scss']
})
export class PatientSummaryComponent implements OnInit {

  constructor(private store: Store<{ patientSummary: IPatientSummary }>) { }

  ngOnInit(): void {
    // the argument here is not being used now but when API is ready it will pass the patient ID that will be used by call to get the patient summary by id
    this.store.dispatch(PatientSummaryActions.invokePatientSummaryAPI({ patientId: '1' }));
  }

}
