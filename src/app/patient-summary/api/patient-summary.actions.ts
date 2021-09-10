import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from "@angular/common/http";
import { IPatientSummary } from './patient-summary.interface'

export const PATIENT_SUMMARY_INVOKE = '[Patient Summary API] Invoke';
export const PATIENT_SUMMARY_SUCCESS = '[Patient Summary API] Load Success';
export const PATIENT_SUMMARY_ERROR = '[Patient Summary API] Load Error';

export const getPatientSummary = createAction(
  PATIENT_SUMMARY_INVOKE,
  props<{ patientId: string }>()
);

export const getPatientSummarySuccess = createAction(
  PATIENT_SUMMARY_SUCCESS,
  props<IPatientSummary>()
);

export const getPatientSummaryError = createAction(
  PATIENT_SUMMARY_ERROR,
  props<{ error: HttpErrorResponse }>(),
);
