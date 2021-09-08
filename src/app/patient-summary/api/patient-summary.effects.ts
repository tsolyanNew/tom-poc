import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PatientSummaryService } from './patient-summary.service';
import * as PatientSummaryActions from './patient-summary.actions'

@Injectable()
export class PatientSummaryEffects {

  constructor(private actions$: Actions,
              private patientSummaryService: PatientSummaryService) {}


  loadPatientSummary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientSummaryActions.PATIENT_SUMMARY_INVOKE),
      mergeMap((action) =>
        this.patientSummaryService.getPatientSummary(action).pipe(
          map((data) => ({type: PatientSummaryActions.PATIENT_SUMMARY_SUCCESS, patientSummary: data}))
        ), 
      ),
      catchError((error) => of({type: PatientSummaryActions.PATIENT_SUMMARY_ERROR, payload: {error}}))
    )
  );
}
