import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router,  NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  isEmptyCategories = false;
  token : any;
  categories = [
    {ID : 1, name : "My Personal Information"}, 
    {ID : 2, name : "My Family Medical History"},
    {ID : 3, name : "My Doctor's visits"},
    {ID : 4, name : "My Hospital visits"},
    {ID : 5, name : "Things to Remember"},
    {ID : 6, name : "My Weight/Height Log"},
    {ID : 7, name : "My Cholesterol Log"},
    {ID : 8, name : "My Blood Pressure Log"},
    {ID : 9, name : "My Vaccination Log"},
    {ID : 10, name : "My Allergies Log"},
    {ID : 11, name : "My Eye Exam Log"},
    {ID : 12, name : "My Dental Exam Log"},
    {ID : 13, name : "Date of Birth Info"}


  ];
  selectedCategoryId : any;
  
  constructor(public alertController: AlertController,
              private router: Router,
              public storage: Storage,
              private toastController: ToastController,
              
              ) { }

  ngOnInit() {

    this.storage.get('token').then((val) => {
      this.token = val;
    });
  }
  gotoPosts(category){

    let navigationExtras: NavigationExtras = {
      state: {
        categoryId: category.ID,
        categoryName: category.name
      }
    };    
    this.router.navigate(['/post'], navigationExtras);
  }  

  gotoReminder(){
    this.router.navigate(['/reminder']);
  }    
  gotoProfile(){
    this.router.navigate(['/myprofile'])
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
