import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, pipe } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { PatientSummaryService } from './patient-summary.service';


@Injectable()
export class PatientSummaryEffects {

  constructor(private actions$: Actions,
              private patientSummaryService: PatientSummaryService) {}


  loadPatientSummary$ = createEffect(() =>
    this.actions$.pipe(
        ofType('[Patient Summary API] Invoke API'),
        mergeMap((action) =>
            this.patientSummaryService.getPatientSummary(action)
            .pipe(map((data) => ({ type: '[Patient Summary API] Load Patient Summary Success', patientSummary: data })))
        )));
}



