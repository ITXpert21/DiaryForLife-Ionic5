import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, LoadingController } from '@ionic/angular';
import { ReminderService  } from '../services/reminder/reminder.service';
import { Reminder } from  '../model/reminder';

@Component({
  selector: 'app-addreminder',
  templateUrl: './addreminder.page.html',
  styleUrls: ['./addreminder.page.scss'],
})
export class AddreminderPage implements OnInit {
  token : any;
  reminders : [];
  reminderdate : any;
  remindertime : any;
  remindertext : any;

  constructor(    
    private route: ActivatedRoute, 
    private router: Router,
    public storage: Storage,
    public reminderService : ReminderService,
    private loadingController: LoadingController,
    private toastController: ToastController,

) { }

  ngOnInit() {
    this.storage.get('token').then((val) => {
      this.token = val;
    });
  }
  async createReminder(){
    let data = {
      token : this.token,
      reminderdate : this.reminderdate,
      remindertime : this.remindertime,
      remindertext : this.remindertext
    }
    data.token = this.token;
    const loading = await this.loadingController.create({
      message: 'Creating reminder ...',
    });
    await loading.present();

    this.reminderService.createReminder( new Reminder(data)).subscribe((result) => {
      loading.dismiss();
      this.reminders = result.services;
      this.presentToast('Create reminder successfully.');
      //this.router.navigate(['/reminder'])
    },error => {  
      this.presentToast('Create reminder failed.');
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
