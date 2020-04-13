import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  isViewType = false;  //if viewtype is false, it is listtype, else it is gridtype
  categoryId : any;
  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.categoryId = this.router.getCurrentNavigation().extras.state.categoryId;
      }
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
