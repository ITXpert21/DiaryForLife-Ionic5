import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { User } from  '../model/user';
import { Profile } from  '../model/profile';

import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public data = {};
  baseUrl:string = "http://mydiaryforlife.betaplanets.com/wp-json/";
  authUrl:string = "http://mydiaryforlife.betaplanets.com/wp-json/jwt-auth/v1/token";

  constructor(private  httpClient : HttpClient) { }

  public  createProduct(formData: FormData): Observable<User> {
    alert("create");
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/register', formData).map(response  => {
      return  new  User(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }  

  public  updateProfile(formData: FormData): Observable<User> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/update_profile', formData).map(response  => {
      return  new  User(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  } 

  public  doLogin( user : User): Observable<User> {
    return  this.httpClient.post(this.authUrl, user).map(response  => {
      return  new  User(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }   
  public  getUsername( email : any): Observable<User> {
    return  this.httpClient.get(this.baseUrl + 'mobileapi/v1/getUsername?email='+email).map(response  => {
      return  new  User(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }  
  public  getProfile( token : any): Observable<Profile> {
    return  this.httpClient.get(this.baseUrl + 'mobileapi/v1/getProfile?token='+token).map(response  => {
      return  new  Profile(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }     
}
