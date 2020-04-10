import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(public alertController: AlertController,
              private route: ActivatedRoute, 
              private router: Router,) { }

  ngOnInit() {
  }
  async removeCategory() {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: 'Are you sure remove category?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Add Category',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Enter new category name.'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  gotoPosts(){
    this.router.navigate(['/post'])
  }  

  gotoReminder(){
    this.router.navigate(['/reminder'])
  }    
  gotoProfile(){
    this.router.navigate(['/profile'])
  }  
}
