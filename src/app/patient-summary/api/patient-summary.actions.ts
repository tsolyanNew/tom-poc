import { createAction, props } from '@ngrx/store';
import { IPatientSummary } from './patient-summary.interface'
 
export const loadPatientSummary = createAction(
    '[Patient Summary API] Load Success',
    props<{patientSummary: IPatientSummary}>()
);
export const invokePatientSummaryAPI = createAction(
    '[Patient Summary API] Invoke API',
    props<{patientId: string}>()
);