import { Component, OnInit } from '@angular/core';
import { PostService  } from '../services/post.service';
import { Post } from  '../model/post';
import { Storage } from '@ionic/storage';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-alldiary',
  templateUrl: './alldiary.page.html',
  styleUrls: ['./alldiary.page.scss'],
})
export class AlldiaryPage implements OnInit {
  token : any;
  diarylist : [];
  constructor(    
    public postService : PostService,
    public storage: Storage,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private router: Router
) { }

  ngOnInit() {
    this.getDiary();
  }
  gotoDetail(diary_id){
    let navigationExtras: NavigationExtras = {
      state: {
        diary_id: diary_id
      }
    }; 
    this.router.navigate(['detaildiary'], navigationExtras);
    console.log(diary_id)
  }

  async getDiary(){

    await this.storage.get('token').then((data)=>{
      this.token = data;
    });  
    let postData = {
      token : this.token,

    }
    const loading = await this.loadingController.create({
      message: 'Loading diary list ...',
    });
    await loading.present();

    this.postService.getDiary(new Post(postData)).subscribe((diaryinfo) => {
      console.log("diaryinfo",diaryinfo );
      this.diarylist = diaryinfo.services;
      loading.dismiss();
      
    },error => {  

    });  
  }

}
