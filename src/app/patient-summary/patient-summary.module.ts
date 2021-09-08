import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { PatientSummaryEffects } from './api/patient-summary.effects'

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    EffectsModule.forRoot([PatientSummaryEffects])
  ]
})
export class PatientSummaryModule { }
