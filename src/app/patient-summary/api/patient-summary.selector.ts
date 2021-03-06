import { createSelector } from '@ngrx/store';
import { IPatientSummary } from './patient-summary.interface';
import { AppState } from '../../api/app.interface';

export const patientSummary = () => createSelector(
    (state: AppState) => state.patientSummary,
    (patientSummary: IPatientSummary) => patientSummary
)
