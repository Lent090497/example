import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Filter } from '../models/filter.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ManagementUserHttpService {
  url: string = 'https://60580e35c3f49200173ad4ae.mockapi.io/api';
  constructor(
    private http: HttpClient
  ) { }

  getUser(filter: Filter){
    let params = new HttpParams();

    if(filter.page > 0){
      params = params.append('page', filter.page);
      params = params.append('limit', filter.limit);
    }

    if(filter.search != ''){
      params = params.append('search', filter.search);
    }

    return this.http.get(`${this.url}/user`, {params});
  }

  createUser(data: User) {
    return this.http.post(`${this.url}/user`, data);
  }

  updateUser(data: User){
    return this.http.put(`${this.url}/user/${data.id}`, data);
  }

  deleteUser(id: number){
    return this.http.delete(`${this.url}/user/${id}`);
  }
}
