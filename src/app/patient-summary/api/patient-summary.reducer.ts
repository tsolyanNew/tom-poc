import { createReducer, on } from '@ngrx/store';
import * as PatientSummaryActions from './patient-summary.actions'
import { AppInitialState } from 'src/app/api/app-initial.state';

export const patientSummaryReducer = createReducer(
  AppInitialState.patientSummary,
  on(PatientSummaryActions.getPatientSummarySuccess, (state, action) => ({
    ...state,
    patientSummary: action
  })),
  on(PatientSummaryActions.getPatientSummaryError, (state, action) => ({
    ...state,
    error: action.error
  }))
);

