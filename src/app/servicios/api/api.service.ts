import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private API_SERVER = 'https://api.spacexdata.com/v4/ships'; 

  constructor(public http:HttpClient) { }

  public getTablas():Observable<any>
  {
    return this.http.get(this.API_SERVER);
  }

}
