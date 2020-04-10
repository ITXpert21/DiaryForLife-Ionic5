import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { PostService  } from '../services/post.service';
import { Post } from  '../model/post';

@Component({
  selector: 'app-detaildiary',
  templateUrl: './detaildiary.page.html',
  styleUrls: ['./detaildiary.page.scss'],
})
export class DetaildiaryPage implements OnInit {
  diary_id: any;
  diary : any;
  diarydate : any;
  post_content : any;
  constructor(    
    private route: ActivatedRoute, 
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController,
    public postService : PostService,


) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.diary_id = this.router.getCurrentNavigation().extras.state.diary_id;
        console.log(this.diary_id )

      }
    });
    this.getDetailDiary(this.diary_id);
  }
  async getDetailDiary(post_id){
 
    let postData = {
      post_id : post_id,

    }
    console.log(postData )
    const loading = await this.loadingController.create({
      message: 'Loading diary list ...',
    });
    await loading.present();

    this.postService.getDetailDiary(new Post(postData)).subscribe((diaryinfo) => {
      console.log("diaryinfo",diaryinfo );
       this.diary = diaryinfo.services;
       this.post_content = this.diary.post_content;
       this.diarydate = this.diary.diarydate;
      
      loading.dismiss();
      
    },error => {  

    });  
  }
}
