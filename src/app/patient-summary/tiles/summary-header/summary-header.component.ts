import { Component, OnInit } from '@angular/core';
import { select, State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPatientSummary, ISummaryHeader } from '../../api/patient-summary.interface';

@Component({
  selector: 'summary-header',
  templateUrl: './summary-header.component.html',
  styleUrls: ['./summary-header.component.scss']
})
export class SummaryHeaderComponent implements OnInit {

  public summaryHeader!: ISummaryHeader;
  public summaryHeader$!: Observable<ISummaryHeader>;

  constructor(
    private state: State<{ payload: IPatientSummary }>,
    private store: Store<{ payload: IPatientSummary }>
  ) { }

  ngOnInit() {
    // this will get the one time state as is
    this.summaryHeader = (this.state.getValue()?.payload?.patientSummary?.summaryHeader || {});

    // this will return an observable of the state
    this.summaryHeader$ = (this.store
      .pipe(select((state: any) => state?.payload?.patientSummary?.summaryHeader || {})));

    console.log(this.summaryHeader)
    this.summaryHeader$.subscribe(summaryHeader => console.log(summaryHeader))
  }

}
