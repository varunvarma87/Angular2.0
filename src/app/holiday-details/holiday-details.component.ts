import { Component, OnInit } from '@angular/core';
import { HolidaysService } from '../holidays.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.css']
})
export class HolidayDetailsComponent implements OnInit {
	public HolidayDetails:any;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private service: HolidaysService) { }

  ngOnInit() {
  this.activatedRoute.params.subscribe((params: Params) => {
         this.service.getHolidayLIst().subscribe((res)=>{
  			this.HolidayDetails= res[params['date']];
  			console.log(this.HolidayDetails);
  	},error=>{
  		console.log(error);
  	})
       });
  }

}
