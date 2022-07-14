import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MainService {

  constructor(private http:HttpClient) { }

  getUser(url:string){
    return this.http.get(url);
  }
  getRepo(page: number, url:string){
    return this.http.get(url + '?page=' + page);
  }
}
