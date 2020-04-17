import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { Reminder } from  '../../model/reminder';

import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  baseUrl:string = "http://mydiaryforlife.betaplanets.com/wp-json/";

  constructor(private  httpClient : HttpClient) { }

  public  createReminder(postData: Reminder): Observable<Reminder> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/createReminder', postData).map(response  => {
      return  new  Reminder(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  } 
  public  updateReminder(postData: Reminder): Observable<Reminder> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/updateReminder', postData).map(response  => {
      return  new  Reminder(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }   
  public  removeReminder(postData: Reminder): Observable<Reminder> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/removeReminder', postData).map(response  => {
      return  new  Reminder(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }   
  public  getReminders(token : any){
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/getReminders', {token : token}).map(response  => {
      return  new  Reminder(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }      
}
