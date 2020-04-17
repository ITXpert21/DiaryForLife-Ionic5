import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { CategoryService  } from '../services/category/category.service';
import { Storage } from '@ionic/storage';
import { ToastController, LoadingController } from '@ionic/angular';
import { Category } from  '../model/category';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  isEmptyCategories = false;
  token : any;
  categories = [];
  selectedCategoryId : any;
  constructor(public alertController: AlertController,
              private route: ActivatedRoute, 
              private router: Router,
              public categoryService : CategoryService,
              public storage: Storage,
              private loadingController: LoadingController,
              private toastController: ToastController,
          
              ) { }

  ngOnInit() {
    this.storage.get('token').then((val) => {
      this.token = val;
      this.getCategories(val);
    });
  }
  ionViewWillEnter(){
    // this.storage.get('token').then((val) => {
    //   this.token = val;
    //   this.getCategories(val);
    // });
  }
  async getCategories(token){
    //(this.token);
    const loading = await this.loadingController.create({
      message: 'Loading ...',
    });
    await loading.present();

    this.categoryService.getCategories(token).subscribe((result) => {
      loading.dismiss();
      this.categories = result.services;
      if(this.categories.length > 0)
        this.isEmptyCategories = false;
      else
        this.isEmptyCategories = true;
    },error => {  

    });  
  }

  async openConfirmDlg(categoryId) {
    this.selectedCategoryId = categoryId;
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure remove category?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.removeCategory();
          }
        }
      ]
    });

    await alert.present();
  }
  async removeCategory(){
    console.log("categoryID", this.selectedCategoryId);
    let postData = {
      token : this.token,
      categoryId : this.selectedCategoryId
    }
    const loading = await this.loadingController.create({
      message: 'Removing category ...',
    });
    await loading.present();

    this.categoryService.removeCategory(  new Category(postData)).subscribe((result) => {
      loading.dismiss();
      this.categories = result.services;
      if(this.categories.length > 0)
        this.isEmptyCategories = false;
      else
        this.isEmptyCategories = true;

      this.presentToast('Removed category successfully.');
    },error => {  
      this.presentToast('Removed category failed.');
    });     
  }

  async addCategory() {
    const alert = await this.alertController.create({
      header: 'Add Category',
      inputs: [
        {
          name: 'name',
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
          handler: (categoryData) => {
           this.createCategory(categoryData);
          }
        }
      ]
    });
    await alert.present();
  }

  async createCategory(data){

    data.token = this.token;
    const loading = await this.loadingController.create({
      message: 'Creating category ...',
    });
    await loading.present();

    this.categoryService.createCategory( new Category(data)).subscribe((result) => {
      loading.dismiss();
      this.categories = result.services;
      
      if(this.categories.length > 0)
        this.isEmptyCategories = false;
      else
        this.isEmptyCategories = true;

      this.presentToast('Create category successfully.');
    },error => {  
      this.presentToast('Create category failed.');
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
