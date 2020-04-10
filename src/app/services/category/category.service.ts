import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { Category } from  '../../model/category';

import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl:string = "http://mydiaryforlife.betaplanets.com/wp-json/";

  constructor(private  httpClient : HttpClient) { }

  public  getCategories(token : any){
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/getCategory', {token : token}).map(response  => {
      return  new  Category(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }  
  
  public  createCategory(postData: Category): Observable<Category> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/createCategory', postData).map(response  => {
      return  new  Category(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }  
  public  removeCategory(postData: Category): Observable<Category>{
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/removeCategory', postData).map(response  => {
      return  new  Category(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }     
}
