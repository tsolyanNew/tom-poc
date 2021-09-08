import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from "@angular/common/http";
import { IPatientSummary } from './patient-summary.interface'
 
export const INVOKE_PATIENT_SUMMARY = '[Patient Summary API] Invoke';
export const PATIENT_SUMMARY_SUCCESS = '[Patient Summary API] Load Success';
export const PATIENT_SUMMARY_ERROR = '[Patient Summary API] Load Error';

export const invokePatientSummaryAPI = createAction(
  INVOKE_PATIENT_SUMMARY,
  props<{patientId: string}>()
);

export const patientSummarySuccess = createAction(
  PATIENT_SUMMARY_SUCCESS,
  props<{patientSummary: IPatientSummary}>()
);

export const patientSummaryError = createAction(
  PATIENT_SUMMARY_ERROR ,
  props<{payload: HttpErrorResponse}>(),
);