import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPatientSummary } from '../../api/patient-summary.interface';

@Component({
  selector: 'summary-header',
  templateUrl: './summary-header.component.html',
  styleUrls: ['./summary-header.component.scss']
})
export class SummaryHeaderComponent implements OnInit {
  public patientSummary$: Observable<IPatientSummary>;
  public summaryHeader: any;

  constructor(private store: Store<{ patientSummary: IPatientSummary }>) {
    this.patientSummary$ = this.store.select('patientSummary')
  }

  ngOnInit() {
    this.patientSummary$.subscribe(el => {
      this.summaryHeader = el
      console.log(this.summaryHeader)
    })
  }

}
