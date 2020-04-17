import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, LoadingController } from '@ionic/angular';
import { AuthenticationService  } from '../services/authentication.service';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.page.html',
  styleUrls: ['./changepwd.page.scss'],
})
export class ChangepwdPage implements OnInit {
  token : any;
  password : any;
  oldPwd : any;
  newPwd : any;
  confirmPwd : any;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public storage: Storage,
    private loadingController: LoadingController,
    private toastController: ToastController,
    public authenticationService : AuthenticationService,

  ) { }

  ngOnInit() {

  }

  async submit(){
    await this.storage.get('token').then((data)=>{
      this.token = data;
    });
    await this.storage.get('password').then((data)=>{
      this.password = data;
    });
    if(this.oldPwd == undefined){
      this.presentToast("Enter old password.");
      return;
    }
    if(this.newPwd == undefined){
      this.presentToast("Enter new password.");
      return;
    }
    if(this.confirmPwd == undefined){
      this.presentToast("Enter confirm password.");
      return;
    }
    if(this.oldPwd != this.password){
      this.presentToast("No match old password.");
      return;
    }
    if(this.newPwd != this.confirmPwd){
      this.presentToast("No match new password.");
      return;
    }    
    let data = {
      token : this.token,
      newPwd : this.newPwd
    }
    data.token = this.token;
    const loading = await this.loadingController.create({
      message: 'Changing password ...',
    });
    await loading.present();
    this.authenticationService.changePwd( data).subscribe((result) => {
      loading.dismiss();
      this.presentToast('Changed password.');
      this.router.navigate(['/myprofile'])
    },error => {  
      this.presentToast('Create reminder failed.');
    });   

  }
  goBack(){
    this.router.navigate(['/profile'])
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
