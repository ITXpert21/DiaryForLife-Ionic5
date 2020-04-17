import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {

  constructor(    
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
  }
  gotoReminder(){
    this.router.navigate(['/reminder'])
  }    
  gotoFirst(){
    this.router.navigate(['/first'])
  }  
  gotoProfileInfo(){
    this.router.navigate(['/profile'])
  }  
  gotoChangePwd(){
    this.router.navigate(['/changepwd'])
  }    
}
