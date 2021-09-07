import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { PatientSummaryService } from './patient-summary.service';
import * as PatientSummaryActions from './patient-summary.actions';


@Injectable()
export class PatientSummaryEffects {

  constructor(private actions$: Actions,
              private patientSummaryService: PatientSummaryService) {}


  loadPatientSummary$ = createEffect(() =>
    this.actions$.pipe(
        ofType(PatientSummaryActions.INVOKE_PATIENT_SUMMARY),
        mergeMap((action) =>
            this.patientSummaryService.getPatientSummary(action)
            .pipe(map((data) => ({ type: PatientSummaryActions.PATIENT_SUMMARY_SUCCESS, patientSummary: data })))
        )));
}



