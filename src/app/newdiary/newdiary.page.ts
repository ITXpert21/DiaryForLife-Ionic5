import { Component, OnInit } from '@angular/core';
import { PostService  } from '../services/post.service';
import { Post } from  '../model/post';
import { Storage } from '@ionic/storage';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-newdiary',
  templateUrl: './newdiary.page.html',
  styleUrls: ['./newdiary.page.scss'],
})
export class NewdiaryPage implements OnInit {
  post_content : string;
  diarydate : string;
  token : any;

  constructor(
    public postService : PostService,
    public storage: Storage,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private route: ActivatedRoute, 
    private router: Router,

    ) { }

  ngOnInit() {
  }
  
  async clickDone(){
    await this.storage.get('token').then((data)=>{
      this.token = data;
    });    
    let postData = {
      token : this.token,
      post_title : this.post_content.substring(0, this.post_content.length/3),
      diarydate : this.diarydate,
      post_content : this.post_content,
    }

    const loading = await this.loadingController.create({
      message: 'Writing diary ...',
    });
    await loading.present();

    this.postService.createDiary( new Post(postData)).subscribe((newDiary) => {
      loading.dismiss();
      this.presentToast('Wrote diary successfully.');
      this.router.navigate(['/alldiary']);
    },error => {  
      this.presentToast('Write diary failed.');


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
