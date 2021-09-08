import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientSummaryModule } from './patient-summary/patient-summary.module';
import { PatientSummaryComponent } from './patient-summary/patient-summary.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SummaryHeaderComponent } from './patient-summary/tiles/summary-header/summary-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientSummaryComponent,
    SummaryHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PatientSummaryModule,

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
