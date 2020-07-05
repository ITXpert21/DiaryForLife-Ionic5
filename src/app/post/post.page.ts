import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { PostService  } from '../services/post.service';
import { Storage } from '@ionic/storage';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Post } from  '../model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  isViewType = false;  //if viewtype is false, it is listtype, else it is gridtype
  isExistPost = false;
  categoryId : any;
  categoryName : any;
  token : any;
  postlist : any[];
  postgrid: any[] = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public postService : PostService,
    public storage: Storage,
    private loadingController: LoadingController,
    private toastController: ToastController,
    public alertController: AlertController,

  ) {
   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.categoryId = this.router.getCurrentNavigation().extras.state.categoryId;
        this.categoryName = this.router.getCurrentNavigation().extras.state.categoryName;
      }
    });
  }
  ionViewDidEnter (){

    this.getPosts();
  }
  viewPost(post){
    post.isViewOnly = true;
    let navigationExtras: NavigationExtras = {
      state: {
        post: post
      }
    };
    switch(this.categoryId){
      case 1 : 
        this.router.navigate(['/editpost'], navigationExtras);
        break;
      case 2 :
        this.router.navigate(['/editpost2'], navigationExtras);   
        break;
      case 3 :
        this.router.navigate(['/editpost3'], navigationExtras);   
        break;     
      case 4 :
        this.router.navigate(['/editpost4'], navigationExtras);   
        break; 
      case 5 :
        this.router.navigate(['/editpost5'], navigationExtras);   
        break;     
      case 6 :
        this.router.navigate(['/editpost6'], navigationExtras);   
        break;  
      case 7 :
        this.router.navigate(['/editpost7'], navigationExtras);   
        break;    
      case 8 :
        this.router.navigate(['/editpost8'], navigationExtras);   
        break;       
      case 9 :
        this.router.navigate(['/editpost9'], navigationExtras);   
        break;    
      case 10 :
        this.router.navigate(['/editpost10'], navigationExtras);   
        break;    
      case 11 :
        this.router.navigate(['/editpost11'], navigationExtras);   
        break;     
      case 12 :
        this.router.navigate(['/editpost12'], navigationExtras);   
        break;  
      case 13 :
        this.router.navigate(['/editpost13'], navigationExtras);   
        break;                                                                        
    }
  }
  async getPosts(){

    await this.storage.get('token').then((data)=>{
      this.token = data;
    });  
    let postData = {
      token : this.token,
      categoryId : this.categoryId
    }
    const loading = await this.loadingController.create({
      message: 'Loading ...',
    });
    await loading.present();

    this.postService.getPosts(postData).subscribe((result) => {
      loading.dismiss();
      this.postlist = result.services;
      let rowNum = 0;
  
      for (let i = 0; i < this.postlist.length; i+=2) { 
    
        if(this.postlist.length % 2 == 1)
          this.postgrid[rowNum] = Array(1); 
        else  
          this.postgrid[rowNum] = Array(2); 
          
        if (this.postlist[i]) { 
          this.postgrid[rowNum][0] = this.postlist[i];
        }
        
        if (this.postlist[i+1]) { 
       
          this.postgrid[rowNum][1] = this.postlist[i+1]
        }
        console.log(this.postgrid);
        rowNum++; 
      }        
     
    },error => {  

    });  

  }
  editPost(post){
    post.isViewOnly = false;
    let navigationExtras: NavigationExtras = {
      state: {
        post: post,
        categoryId : this.categoryId,
        categoryName : this.categoryName
      }
    };    
    console.log("categoryID", this.categoryId);
    switch(this.categoryId){
      case 1 : 
        this.router.navigate(['/editpost'], navigationExtras);
        break;
      case 2 :
        this.router.navigate(['/editpost2'], navigationExtras);   
        break;
      case 3 :
        this.router.navigate(['/editpost3'], navigationExtras);   
        break;        
      case 4 :
        this.router.navigate(['/editpost4'], navigationExtras);   
        break;   
      case 5 :
        this.router.navigate(['/editpost5'], navigationExtras);   
        break;     
      case 6 :
        this.router.navigate(['/editpost6'], navigationExtras);   
        break;    
      case 7 :
        this.router.navigate(['/editpost7'], navigationExtras);   
        break;     
      case 8 :
        this.router.navigate(['/editpost8'], navigationExtras);   
        break;                                       
      case 9 :
        this.router.navigate(['/editpost9'], navigationExtras);   
        break;  
      case 10 :
        this.router.navigate(['/editpost10'], navigationExtras);   
        break;                                                    
      case 11 :
        this.router.navigate(['/editpost11'], navigationExtras);   
        break;    
      case 12 :
        this.router.navigate(['/editpost12'], navigationExtras);   
        break;   
      case 13 :
        this.router.navigate(['/editpost13'], navigationExtras);   
        break;                    
    }
  }
  goBack(){
    this.router.navigate(['/first'])
  }
  gotoNewPost(){
    let navigationExtras: NavigationExtras = {
      state: {
        categoryId: this.categoryId
      }
    };    
    switch(this.categoryId){
      case 1 : 
        this.router.navigate(['/newpost'], navigationExtras);
        break;
      case 2 :
        this.router.navigate(['/newpost2'], navigationExtras);   
        break;
      case 3 :
        this.router.navigate(['/newpost3'], navigationExtras);   
        break;        
      case 4 :
        this.router.navigate(['/newpost4'], navigationExtras);   
        break;   
      case 5 :
        this.router.navigate(['/newpost5'], navigationExtras);   
        break;     
      case 6 :
        this.router.navigate(['/newpost6'], navigationExtras);   
        break;
      case 7 :
        this.router.navigate(['/newpost7'], navigationExtras);   
        break;   
      case 8 :
        this.router.navigate(['/newpost8'], navigationExtras);   
        break;        
      case 9 :
        this.router.navigate(['/newpost9'], navigationExtras);   
        break;    
      case 10 :
        this.router.navigate(['/newpost10'], navigationExtras);   
        break;      
      case 11 :
        this.router.navigate(['/newpost11'], navigationExtras);   
        break;    
      case 12 :
        this.router.navigate(['/newpost12'], navigationExtras);   
        break;  
      case 13 :
        this.router.navigate(['/newpost13'], navigationExtras);   
        break;                                       
    }
    //this.router.navigate(['/newpost'], navigationExtras)
  }
  selectViewType(){
    this.isViewType = !this.isViewType
  }
  async removePost(post){
    let postData = {
      token : this.token,
      categoryId : post.post_type,
      postId : post.ID
    }
    const loading = await this.loadingController.create({
      message: 'Removing post ...',
    });
    await loading.present();

    this.postService.removePost( new Post(postData)).subscribe((result) => {
      loading.dismiss();
      this.postlist = result.services;

      if(this.postlist.length > 0)
        this.isExistPost = true;
      else
        this.isExistPost = false;

        let rowNum = 0;
    
        for (let i = 0; i < this.postlist.length; i+=2) { 
      
          if(this.postlist.length % 2 == 1)
            this.postgrid[rowNum] = Array(1); 
          else  
            this.postgrid[rowNum] = Array(2); 
            
          if (this.postlist[i]) { 
            this.postgrid[rowNum][0] = this.postlist[i];
          }
          
          if (this.postlist[i+1]) { 
         
            this.postgrid[rowNum][1] = this.postlist[i+1]
          }
          console.log(this.postgrid);
          rowNum++; 
        }     
      this.presentToast('Removed post successfully.');
    },error => {  
      this.presentToast('Removed post failed.');
    });       
  }
  


  async presentToast(text) {
    const toast = await this.toastController.create({
        message: text,
        position: 'top',
        duration: 3000
    });
    toast.present();
  }  
}
