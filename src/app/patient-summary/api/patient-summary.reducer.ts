import { Action, createReducer, on } from '@ngrx/store';
import * as PatientSummaryActions from './patient-summary.actions'
import { IPatientSummary } from './patient-summary.interface';
import { AppInitialState } from 'src/app/api/app-initial.state';

export const patientSummaryReducer = createReducer(
  AppInitialState.patientSummary,
  on(PatientSummaryActions.patientSummarySuccess, state => ({
    ...state,
    patientSummary: state
  })),
);

export function reducer(state: IPatientSummary | undefined, action: Action) {
  return patientSummaryReducer(state, action);
}
