import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, LoadingController } from '@ionic/angular';
import { ReminderService  } from '../services/reminder/reminder.service';
import { Reminder } from  '../model/reminder';

@Component({
  selector: 'app-editreminder',
  templateUrl: './editreminder.page.html',
  styleUrls: ['./editreminder.page.scss'],
})
export class EditreminderPage implements OnInit {
  reminder : any;
  reminders : [];
  reminderId : any;
  reminderdate : any;
  remindertime : any;
  remindertext : any;
  token : any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public storage: Storage,
    private loadingController: LoadingController,
    private toastController: ToastController,
    public reminderService : ReminderService,


  ) {
    console.log("edit reminder");
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.reminder = this.router.getCurrentNavigation().extras.state.reminder;
        this.reminderId = this.reminder.ID;
        this.reminderdate = this.reminder.reminderdate;
        this.remindertime = this.reminder.remindertime;
        this.remindertext = this.reminder.remindertext;
      }
    });
   }

  ngOnInit() {
    this.storage.get('token').then((val) => {
      this.token = val;
    });
  }

  ionViewWillEnter(){

  }
  async updateReminder(){
    let data = {
      token : this.token,
      reminderdate : this.reminderdate,
      remindertime : this.remindertime,
      remindertext : this.remindertext,
      reminderId : this.reminderId
    }
    data.token = this.token;
    const loading = await this.loadingController.create({
      message: 'Updating reminder ...',
    });
    await loading.present();

    this.reminderService.updateReminder( new Reminder(data)).subscribe((result) => {
      loading.dismiss();
      this.reminders = result.services;
      //this.presentToast('Create reminder successfully.');
      this.router.navigate(['/reminder'])
    },error => {  
      this.presentToast('Update reminder failed.');
    });     
  }  
  async presentToast(text) {
    const toast = await this.toastController.create({
        message: text,
        position: 'top',
        duration: 3000
    });
    toast.present();
  }  
  goBack(){
    this.router.navigate(['/reminder'])
  } 
}
