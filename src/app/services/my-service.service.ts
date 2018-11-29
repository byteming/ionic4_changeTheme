import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  selectedUser: any;

  constructor(private http: HttpClient) { }

  async getUser(){
    const result: any = await this.http.get<User>('https://randomuser.me/api/?results=20').toPromise();
    return result;
  }
}
