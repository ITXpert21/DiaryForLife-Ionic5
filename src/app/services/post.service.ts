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
  public  updatePost(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/updatePost', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }   
  public  updatePost2(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/updatePost2', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }    
  public  updatePost3(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/updatePost3', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }    
  public  updatePost4(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/updatePost4', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  } 
  public  updatePost5(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/updatePost5', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }    
  public  updatePost6(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/updatePost6', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }    
  public  updatePost7(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/updatePost7', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }    
  public  updatePost8(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/updatePost8', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }   
  public  updatePost9(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/updatePost9', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }    
  public  updatePost10(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/updatePost10', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }   
  public  updatePost11(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/updatePost11', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }    
  public  updatePost12(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/updatePost12', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }  
  public  updatePost13(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/updatePost13', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }   
  public getPostById(postData){
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/getPostById', postData).map(response  => {
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
  public  createPost2(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/createPost2', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }   
  public  createPost3(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/createPost3', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }   
  public  createPost4(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/createPost4', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }   
  public  createPost5(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/createPost5', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }   
  public  createPost6(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/createPost6', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  } 
  public  createPost7(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/createPost7', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }     
  public  createPost8(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/createPost8', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }  
  public  createPost9(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/createPost9', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }  
  public  createPost10(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/createPost10', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }  
  public  createPost11(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/createPost11', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }   
  public  createPost12(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/createPost12', formData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }    
  public  createPost13(formData: FormData): Observable<Post> {
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/createPost13', formData).map(response  => {
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
  public  removePost(postData: Post): Observable<Post>{
    return  this.httpClient.post(this.baseUrl + 'mobileapi/v1/removePost', postData).map(response  => {
      return  new  Post(response);
    }).catch((error: any)=>{
      return Observable.throw(error);
    });
  }     
}
