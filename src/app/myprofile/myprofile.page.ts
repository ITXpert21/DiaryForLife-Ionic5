import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {

  constructor(    
    private route: ActivatedRoute, 
    private router: Router,
    public storage: Storage) { }

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
  signOut(){
    this.storage.remove('token');
    this.storage.remove('email');
    this.storage.remove('password');
    this.router.navigate(['/home'])
  }
}
