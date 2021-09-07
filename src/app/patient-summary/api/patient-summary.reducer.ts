import { Action, createReducer, on } from '@ngrx/store';
import * as PatientSummaryActions from './patient-summary.actions'
import { IPatientSummary } from './patient-summary.interface';

export const initialState: IPatientSummary = {
    patientId: '000'
};

const patientSummaryReducer = createReducer(
    initialState,
    on(PatientSummaryActions. patientSummarySuccess, state => ({ ...state, patientSummary: state })),
  );

  export function reducer(state: IPatientSummary | undefined, action: Action) {
    return patientSummaryReducer(state, action);
  }
