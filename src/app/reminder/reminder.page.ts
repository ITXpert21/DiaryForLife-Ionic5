import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
})
export class ReminderPage implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }
  gotoHome(){
    this.router.navigate(['/first'])
  } 
  gotoProfile(){
    this.router.navigate(['/profile'])
  } 
  gotoDetail(){
    this.router.navigate(['/detailreminder'])
  } 
  async removeReminder() {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: 'Are you sure remove reminder?',
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
}
