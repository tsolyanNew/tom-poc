import { Action, createReducer, on } from '@ngrx/store';
import * as PatientSummaryActions from './patient-summary.actions'
import { IPatientSummary } from './patient-summary.interface';
import { AppInitialState } from 'src/app/api/app-initial.state';

export const patientSummaryReducer = createReducer(
  AppInitialState.patientSummary,
  on(PatientSummaryActions.patientSummarySuccess, (state, result) => ({ patientSummary: result }))
);

