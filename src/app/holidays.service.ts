import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HolidaysService {

  constructor(private http:HttpClient) { }

  getHolidayLIst(){
    return this.http.get('http://localhost:8090/holiday').map((res)=> res['holidays']);
  }

}
