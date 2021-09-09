import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPatientSummary, ISummaryHeader } from '../../api/patient-summary.interface';

@Component({
  selector: 'summary-header',
  templateUrl: './summary-header.component.html',
  styleUrls: ['./summary-header.component.scss']
})
export class SummaryHeaderComponent implements OnInit {
  public patientSummary$: Observable<any>;
  public summaryHeader!: ISummaryHeader;

  constructor(private store: Store<{ patientSummary: IPatientSummary }>) {
    this.patientSummary$ = this.store.select('patientSummary')
  }

  ngOnInit() {
    this.patientSummary$.subscribe(el => {
      this.summaryHeader = el.patientSummary.summaryHeader
      console.log(this.summaryHeader)
    })
  }

}
