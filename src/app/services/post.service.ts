import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { Post } from  '../model/post';

import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl:string = "http://mydiaryforlife.betaplanets.com/wp-json/";

  constructor(private  httpClient : HttpClient) { }

  public  createDiary(postData: Post): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/create_product', postData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }  

  public  getDiary(postData: Post): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/getDiary', postData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }    
  public  getDetailDiary(postData: Post): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/getDetailDiary', postData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  } 

  public  createPost(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/createPost', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }  
  public getPosts(postData){
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/getPosts', postData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }      
}
