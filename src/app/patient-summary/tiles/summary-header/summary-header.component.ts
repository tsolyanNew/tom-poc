import { Component, OnInit } from '@angular/core';
import { select, State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPatientSummary, ISummaryHeader, IPatientSummaryStoreResponse } from '../../api/patient-summary.interface';

@Component({
  selector: 'summary-header',
  templateUrl: './summary-header.component.html',
  styleUrls: ['./summary-header.component.scss']
})
export class SummaryHeaderComponent implements OnInit {

  public summaryHeader!: ISummaryHeader;
  public summaryHeader$!: Observable<ISummaryHeader>;
  public isLoading: boolean = false;

  constructor(
    private state: State<{ payload: IPatientSummary }>,
    private store: Store<IPatientSummaryStoreResponse>
  ) { }

  ngOnInit() {
    // this will get the one time state as is
    this.summaryHeader = (this.state.getValue()?.payload?.patientSummary?.summaryHeader || {});

    // this will return an observable of the state
    // it also gives the UI a loading state to run spinners
    this.summaryHeader$ = (this.store
      .pipe(
        select((store: IPatientSummaryStoreResponse) => {
          this.isLoading = store?.payload?.loading;
          return store?.payload?.patientSummary?.summaryHeader || {} as ISummaryHeader;
        })
      )
    );

    console.log(this.summaryHeader)
    this.summaryHeader$.subscribe(summaryHeader => console.log(summaryHeader))
  }

}
