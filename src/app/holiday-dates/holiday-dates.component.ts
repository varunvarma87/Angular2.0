import { Component, OnInit } from '@angular/core';
import { HolidaysService } from '../holidays.service';

@Component({
  selector: 'app-holiday-dates',
  templateUrl: './holiday-dates.component.html',
  styleUrls: ['./holiday-dates.component.css']
})
export class HolidayDatesComponent implements OnInit {
 public HolidayDates:any;
  constructor(private service: HolidaysService) { }

  ngOnInit() {
  this.service.getHolidayLIst().subscribe((res)=>{
  		this.HolidayDates = Object.keys(res);
  	},error=>{
  		console.log(error);
  	})
  }

}
