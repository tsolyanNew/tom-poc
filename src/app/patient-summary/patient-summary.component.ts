import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IPatientSummary } from './api/patient-summary.interface';
import * as PatientSummaryActions from './api/patient-summary.actions'

@Component({
  selector: 'patient-summary',
  templateUrl: './patient-summary.component.html',
  styleUrls: ['./patient-summary.component.scss']
})
export class PatientSummaryComponent implements OnInit {

  constructor(private store: Store<{patientSummary:  IPatientSummary}>) {}

  ngOnInit(): void {
    this.store.dispatch(PatientSummaryActions.invokePatientSummaryAPI({patientId: '1'}));
  }

}
