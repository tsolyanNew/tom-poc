import { Component, OnInit } from '@angular/core';
import { State } from '@ngrx/store';
import { ISummaryHeader } from '../../api/patient-summary.interface';

@Component({
  selector: 'summary-header',
  templateUrl: './summary-header.component.html',
  styleUrls: ['./summary-header.component.scss']
})
export class SummaryHeaderComponent implements OnInit {

  public summaryHeader!: ISummaryHeader;

  constructor(private state: State<any>) { }

  ngOnInit() {
    this.summaryHeader = (this.state.getValue()?.payload?.patientSummary?.summaryHeader as ISummaryHeader) || {};
    console.log(this.summaryHeader)
  }

}
