import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ToastController, LoadingController } from '@ionic/angular';
import { ReminderService  } from '../services/reminder/reminder.service';
import { Reminder } from  '../model/reminder';
import { LocalNotifications, ELocalNotificationTriggerUnit} from '@ionic-native/local-notifications/ngx'

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
})
export class ReminderPage implements OnInit {
  token : any;
  reminders : [];
  notifications: any = [];
  isEmptyReminders = false;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public storage: Storage,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    public reminderService : ReminderService,
    public localNotifications: LocalNotifications
  ) { }

  ngOnInit() {
    this.storage.get('token').then((val) => {
      this.token = val;
      this.getReminders();
    });

  }
  ionViewWillEnter(){
  }
  async getReminders(){
    const loading = await this.loadingController.create({
      message: 'Loading ...',
    });
    await loading.present();

    this.reminderService.getReminders(this.token).subscribe((result) => {
      loading.dismiss();
      this.reminders = result.services;

      if(this.reminders.length > 0){
        this.isEmptyReminders = false;
        for(let i=0; i<result.services.length; i++){
          let reminderDate = result.services[i].reminderdate;
          let reminderTime = result.services[i].remindertime;
          let reminderDateTime = new Date(new Date(reminderDate).getFullYear() + '-' + (new Date(reminderDate).getMonth() + 1) + "-" + new Date(reminderDate).getDate() + ' ' + new Date(reminderTime).getHours() + ':' + new Date(reminderTime).getMinutes());
          
          if(this.getTriggerMinutes(new Date(), reminderDateTime) > 0){
            let notification = {
              id : i+1,
              //at : new Date(at.split(".")[0]).getTime(),
              trigger: {in : this.getTriggerMinutes(new Date(), reminderDateTime), unit : ELocalNotificationTriggerUnit.MINUTE},
              text : result.services[i].remindertext
            }
            this.notifications.push(notification);
          }
        }
        console.log(this.notifications);
        this.localNotifications.schedule(this.notifications);
      }
      else
        this.isEmptyReminders = true;
    },error => {  

    });  
  }
  getTriggerMinutes(currentDate, reminderDate){
    var dif = (reminderDate - currentDate); 
    var dif = Math.round((dif/1000)/60); 
    return dif;
  }  
  async removeReminder(reminderId){
    let data = {
      ID : reminderId
    }
    const loading = await this.loadingController.create({
      message: 'Removing reminder ...',
    });
    await loading.present();

    this.reminderService.removeReminder( new Reminder(data)).subscribe((result) => {
      loading.dismiss();
      this.reminders = result.services;

      if(this.reminders.length > 0)
        this.isEmptyReminders = false;
      else
        this.isEmptyReminders = true;
      this.presentToast('Remove reminder successfully.');
    },error => {  
      this.presentToast('Remove reminder failed.');
    }); 
  }
  gotoHome(){
    this.router.navigate(['/first'])
  } 
  gotoProfile(){
    this.router.navigate(['/myprofile'])
  } 
  gotoAddReminder(){
    this.router.navigate(['/addreminder'])
  } 
  gotoEditReminder(reminderInfo){
    let navigationExtras: NavigationExtras = {
      state: {
        reminder: reminderInfo
      }
    }; 
    console.log(reminderInfo);     
    this.router.navigate(['/editreminder'], navigationExtras)
  } 
  async openConfirm(reminderId) {
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
            this.removeReminder(reminderId);
          }
        }
      ]
    });

    await alert.present();
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
