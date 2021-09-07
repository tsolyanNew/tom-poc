import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IPatientSummary } from './patient-summary.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientSummaryService {

  constructor() { }

  public getPatientSummary(patientId: string): Observable<IPatientSummary> {
    return of({patientId})
  }
}
