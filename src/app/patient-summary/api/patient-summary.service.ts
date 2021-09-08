import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IPatientSummary } from './patient-summary.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientSummaryService {

  private mockPatientSummary: IPatientSummary = {
    patientId: '1',
    summaryHeader: {
      patient: {
      id: '1',
      firstName: 'testuser1',
      lastName: 'testuserLastName',
      dob: new Date('1981-01-01'),
      sex: 'F',
      address: {
        street: '123 Main st',
        city: 'Downingtown',
        state: 'PA',
        zip: 19226,
      }
      },
        provider: {
        id: '100',
        title: 'DR',
        firstName: 'Michael',
        lastName: 'Roy',
        status: 'any',
      },
      organizations: [
        {name: 'united org', id: '1'},
        {name: 'org1', id: '2'},
        {name: 'org2', id: '3'}
      ]
    },
    vitals: {
      height: {
        date: new Date('1981-01-01'),
        value: '5\'7'
      },
      weight: {
        date: new Date('1981-01-01'),
        value: '117'
      },
      bsa: 'TBD',
      ccdURL: 'URL'
    },
    conditions: {
      items: [
        {
          id: '2',
          code: 'ICD',
          description: 'TBD',
          date: new Date('1981-01-01')
        },
        {
          id: '3',
          code: 'ICD9',
          description: 'TBD',
          date: new Date('1999-01-03')
        }
      ],
      ccdURL: 'URL'
    },
    labs: {
      items: [
        {
          id: '3',
          date: new Date('1999-01-03'),
          doctor: 'Mark',
          testType: {
            name: 'HCG',
            ccdURL: 'URL'
          }
        },
        {
          id: '4',
          date: new Date('1987-12-03'),
          doctor: 'Joe',
           testType: {
            name: 'ECG',
            ccdURL: 'URL'
          }
        }
      ]
    },
     medications: {
      items: [
        {
          id: '5',
          label: 'labelName1',
          items: ['item1', 'item2', 'item3']
        },
        {
          id: '6',
          label: 'labelName1',
          items: ['item4', 'item5', 'item6']
        }
      ],
      ccdURL: 'URL'
    },
    allergies: {
      items: [
        {
          id: '7',
          activeAllergy: 'Y',
          reaction: {
            value: 'TBD',
            severity: 'low'
          }
        },
        {
          id: '8',
          activeAllergy: 'N',
            reaction: {
            value: 'TBD',
            severity: 'low'
          }
        },
      ],
      ccdURL: 'URL'
    },
    notes: {}
  };

  constructor() { }

  public getPatientSummary(patientId: string): Observable<IPatientSummary> {
    return of(this.mockPatientSummary)
  }
}
