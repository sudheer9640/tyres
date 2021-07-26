import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
mockApi = 'https://6080be3273292b0017cdbf2a.mockapi.io';

  constructor(private http: HttpClient) { }

  getYears(): Observable<any> {
    return this.http.get(this.mockApi + '/years');
  }

  getMakes(): Observable<any> {
    return this.http.get(this.mockApi + '/makes');
  }

  getModels(): Observable<any> {
    return this.http.get(this.mockApi + '/models');
  }

  getTrims(): Observable<any> {
    return this.http.get(this.mockApi + '/trim');
  }

  getTyes(): Observable<any> {
    return this.http.get(this.mockApi + '/tyre');
  }


}
