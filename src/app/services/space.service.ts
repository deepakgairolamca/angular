import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(private http: HttpClient) { }

  getSpaceData(params?: any): Observable<any> {
    return this.http.get('https://api.spacexdata.com/v3/launches', { params });
  }



}
