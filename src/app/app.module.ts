import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs';
import { AppComponent } from './app.component';
import { HolidayDatesComponent } from './holiday-dates/holiday-dates.component';
import { HolidayDetailsComponent } from './holiday-details/holiday-details.component';
import { HolidaysService } from './holidays.service';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HolidayDatesComponent,
    HolidayDetailsComponent
  ],
  imports: [
  HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([{path:'',component:HolidayDatesComponent},
    {path:'holidayDetails/:date',component:HolidayDetailsComponent}])
  ],
  providers: [HolidaysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
