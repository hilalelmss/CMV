import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import News from '../model/news';
import Announcement from '../model/announcement';
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:8080/new/';
  announcementUrl='http://localhost:8080/announcement/'
  

  getNews() {
    return this.http.get<any>(this.configUrl).toPromise()
    .then(
      res => 
      <News[]>res)
    .then(
      data => 
      { return data; }
      );
  }
  getAnnouncement() {
 return this.http.get<any>(this.announcementUrl).toPromise()
    .then(
      res => 
      <Announcement[]>res)
    .then(
      data => 
      { return data; }
      );
 }

}
