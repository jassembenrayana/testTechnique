import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entity/User';


@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {
  private url: string = "/assets/data.json";
  dataEmitter = new EventEmitter<User>();

  constructor(private http: HttpClient) {}

  getDataFromFile(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }
}
