import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AuthenticationService  } from '../services/authentication.service';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.page.html',
  styleUrls: ['./forgotpwd.page.scss'],
})
export class ForgotpwdPage implements OnInit {
  user_email : any
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public authenticationService : AuthenticationService,
    private loadingController: LoadingController,
    private toastController: ToastController,

  ) { }

  ngOnInit() {
  }
  async sendCode(){
    let data = {
      user_login : this.user_email
    }
    const loading = await this.loadingController.create({
      message: 'Sending...',
    });
    await loading.present();

    this.authenticationService.retrivePassword(data).subscribe((result) => {
      loading.dismiss();
      console.log(result.status);
      if(result.status == 'ok'){
        this.presentToast(result.msg);
        this.router.navigate(['/home'])
      }else
        this.presentToast(result.msg);
    },error => {  
      loading.dismiss();
      console.log(error.error.msg);
      this.presentToast(error.error.msg);

    });  
  }
  goBack(){
    this.router.navigate(['/home'])
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
