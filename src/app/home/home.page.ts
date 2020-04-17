import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { AuthenticationService  } from '../services/authentication.service';
import { User } from  '../model/user';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email : string;
  username : string;
  password : string;
  data: any;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private toastController: ToastController,
    public authenticationService : AuthenticationService,
    private loadingController: LoadingController,
    public storage: Storage) {

      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.data = this.router.getCurrentNavigation().extras.state.user;
          console.log("data======", this.data);
        }
      });
  }

  async login(){
    if(this.email == undefined){
      this.presentToast("please insert email");
      return;
    }
    if(this.password == undefined){
      this.presentToast("please insert password");
      return;
    }  

    const loading = await this.loadingController.create({
      message: 'Authenticating user...',
    });
    await loading.present();

    let credential = {
      username : this.email,
      password : this.password
    }
    this.authenticationService.doLogin(new User(credential)).subscribe((userinfo) => {
      loading.dismiss();
     // this.storage.remove('token');
     console.log('userinfo', userinfo);
      this.storage.set('token',userinfo.token);
      this.storage.set('email',this.password);
      
      this.router.navigate(['/first']);
    },error => {  
      loading.dismiss();
      this.presentToast("login failed.");

    });      
    
  }

  gotoSignup(){
    this.router.navigate(['/signup'])
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
