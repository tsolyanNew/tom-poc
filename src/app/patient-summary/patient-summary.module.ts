import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PatientSummaryEffects } from './api/patient-summary.effects';
import { patientSummaryReducer } from './api/patient-summary.reducer'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot([PatientSummaryEffects]),
    StoreModule.forRoot({ payload: patientSummaryReducer }),
  ]
})
export class PatientSummaryModule { }
