import { createSelector } from '@ngrx/store';
import { IPatientSummary } from './patient-summary.interface';
import { PatientSummaryState } from './patient-summary.state';

export const patientSummarySelector =(state: PatientSummaryState) => state.patientSummary;


export const patientSummary = (patientId: string) => createSelector(
    patientSummarySelector,
    (patientSummary: IPatientSummary) => {
        patientSummary.patientId = patientId
        return patientSummary
    }

)