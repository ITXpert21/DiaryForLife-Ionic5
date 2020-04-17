import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { PostService  } from '../services/post.service';
import { Storage } from '@ionic/storage';
import { ToastController, LoadingController } from '@ionic/angular';
import { Post } from  '../model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  isViewType = false;  //if viewtype is false, it is listtype, else it is gridtype
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
  ionViewWillEnter(){
      this.getPosts();
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
      message: 'Loading diary list ...',
    });
    await loading.present();

    this.postService.getPosts(postData).subscribe((result) => {
      console.log("result",result );
      loading.dismiss();
      this.postlist = result.services;
      this.postgrid = Array(Math.ceil(this.postlist.length/2)); //MATHS!

      let rowNum = 0; //counter to iterate over the rows in the grid

      for (let i = 0; i < this.postlist.length; i+=2) { //iterate images
    
        this.postgrid[rowNum] = Array(2); //declare two elements per row
    
        if (this.postlist[i]) { //check file URI exists
          this.postgrid[rowNum][0] = this.postlist[i] //insert image
        }
    
        if (this.postlist[i+1]) { //repeat for the second image
          this.postgrid[rowNum][1] = this.postlist[i+1]
        }
    
        rowNum++; //go on to the next row
      }
      console.log(this.postgrid);
      
      
    },error => {  

    });  
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
    this.router.navigate(['/newpost'], navigationExtras)
  }
  selectViewType(){
    this.isViewType = !this.isViewType
  }

}
