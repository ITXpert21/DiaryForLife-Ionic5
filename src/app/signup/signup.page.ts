import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File, FileEntry} from '@ionic-native/file/ngx';
import { ActionSheetController, Platform, LoadingController, ToastController } from '@ionic/angular';
import { Router, NavigationExtras  } from '@angular/router';
import { AuthenticationService  } from '../services/authentication.service';
import { FilePath } from '@ionic-native/file-path/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
    signupForm: FormGroup;
    imageResponse: any;
    options: any;
    showAvatar : any;
    email : string;
    password: string;
    birthday : string;
    gender : string;
    first_name : string;
    last_name : string;
    croppedImagepath = "";
    images = [];
    loadImage = {name: "", path: "", filePath: ""};
    isSubmitted = false;
    constructor(
      private camera: Camera, 
      private file: File, 
      private router: Router,
      private plt: Platform,
      public authenticationService : AuthenticationService,
      public actionSheetController: ActionSheetController,
      private webview: WebView,
      private storage: Storage,
      private ref: ChangeDetectorRef,
      private loadingController: LoadingController,
      private toastController: ToastController,
      private filePath: FilePath,
      public formBuilder: FormBuilder
      ) { }

    ngOnInit() {
      this.showAvatar = false;
      this.signupForm = this.formBuilder.group({
        firstname_form: ['', [Validators.required, Validators.minLength(2)]],
        lastname_form: ['', [Validators.required, Validators.minLength(2)]],
        password_form: ['', [Validators.required, Validators.minLength(6)]],
        email_form: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$')]],
      })
    }
    
    
    gotoHome(){
      let user = {
        email : this.email,
        password: this.password,
        birthday : this.birthday,
        gender : this.gender,
        first_name : this.first_name,
        last_name : this.last_name,
      };
      let navigationExtras: NavigationExtras = {
        state: {
          user: user
        }
      };    
      this.router.navigate(['/home'], navigationExtras);
    }
    startUpload() {
      if(this.loadImage.filePath == ""){
        const formData = new FormData();
        formData.append('first_name', this.first_name);
        formData.append('last_name', this.last_name);
        formData.append('email', this.email);
        formData.append('password', this.password);
        formData.append('role', 'player');

        this.registerNewUser(formData);
        return;

      }
      this.file.resolveLocalFilesystemUrl(this.loadImage.filePath)
        .then(entry => {
            ( < FileEntry > entry).file(file => this.readFile(file))
        })
        .catch(err => {
            alert('Error while reading file.');
        });
    }
   
    readFile(file: any) {
        const reader = new FileReader();
        reader.onload = () => {
            const formData = new FormData();
            const imgBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('file', imgBlob, file.name);
            formData.append('first_name', this.first_name);
            formData.append('last_name', this.last_name);
            formData.append('email', this.email);
            formData.append('password', this.password);
            formData.append('role', 'player');
            this.registerNewUser(formData);
        };
        reader.readAsArrayBuffer(file);
    }
    
    async registerNewUser(formData: FormData) {
      const loading = await this.loadingController.create({
          message: 'Creating new user...',
      });
      await loading.present();

      this.authenticationService.createProduct(formData).subscribe((newUser) => {
        loading.dismiss();
        this.presentToast('User created successfully.');
        //this.deleteImage();
        this.router.navigate(['/home']);
      },error => {  
        console.log("signup error ==", error);
        loading.dismiss();
        this.presentToast(error.error.errormsg);
  
      });         

    }
    get errorControl() {
      return this.signupForm.controls;
    }

    submit(){
      this.isSubmitted = true;
      if (!this.signupForm.valid) {
        console.log('Please provide all the required values!')
        return;
      } else {
        console.log(this.signupForm.value);
        let formvalue = this.signupForm.value;

        this.first_name = formvalue.firstname_form;
        this.last_name = formvalue.lastname_form;
        this.email = formvalue.email_form;
        this.password = formvalue.password_form;        
        this.startUpload();

      }      
      
    } 
    goBack(){
      this.router.navigate(['/home']);
    }
    async selectImage() {
      const actionSheet = await this.actionSheetController.create({
        header: "Select Image source",
        buttons: [{
          text: 'Load from Library',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
        ]
      });
      await actionSheet.present();
    }

    pickImage(sourceType) {
      const options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };
    this.camera.getPicture(options).then(imagePath => {
      if (this.plt.is('android') /*&& sourceType === this.camera.PictureSourceType.PHOTOLIBRARY*/) {
        this.filePath.resolveNativePath(imagePath)
        .then(filePath => {
          let correctPath = "";
          let currentName = "";
          if(sourceType === this.camera.PictureSourceType.PHOTOLIBRARY){
              correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
              currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
          }
          if(sourceType === this.camera.PictureSourceType.CAMERA){
              correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
              currentName = filePath.substr(filePath.lastIndexOf('/') + 1);
          }
          //this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          let native_filePath = correctPath + currentName;
          let resPath = this.pathForImage(native_filePath);
          this.showAvatar = true;
          this.loadImage = { name: currentName, path: resPath, filePath: native_filePath };

        });
      } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          let native_filePath = correctPath + currentName;
          let resPath = this.pathForImage(native_filePath);
          this.showAvatar = true;
          this.loadImage = { name: currentName, path: resPath, filePath: native_filePath };

          //this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    });

    } 
    loadStoredImages() {
      this.storage.get(STORAGE_KEY).then(images => {
        if (images) {
          let arr = JSON.parse(images);
          this.images = [];
          for (let img of arr) {
            let filePath = this.file.dataDirectory + img;
            let resPath = this.pathForImage(filePath);
            this.showAvatar = true;
            this.loadImage = { name: img, path: resPath, filePath: filePath };
          }
        }
      });
    }

    pathForImage(img) {
      if (img === null) {
        return '';
      } else {
        let converted = this.webview.convertFileSrc(img);
        return converted;
      }
    }
    createFileName() {
      var d = new Date(),
          n = d.getTime(),
          newFileName = n + ".jpg";
      return newFileName;
    }
   
    copyFileToLocalDir(namePath, currentName, newFileName) {
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
          this.updateStoredImages(newFileName);
      }, error => {
          alert('Error while storing file.');
      });
    }

    updateStoredImages(name) {
      this.storage.get(STORAGE_KEY).then(images => {
          let arr = JSON.parse(images);
          if (!arr) {
              let newImages = [name];
              this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
          } else {
              arr.push(name);
              this.storage.set(STORAGE_KEY, JSON.stringify(arr));
          }
   
          let filePath = this.file.dataDirectory + name;
          let resPath = this.pathForImage(filePath);
          let newEntry = {
              name: name,
              path: resPath,
              filePath: filePath
          };
   
          this.images = [newEntry, ...this.images];
          this.ref.detectChanges(); // trigger change detection cycle
          this.loadStoredImages();
      });
  }

  deleteImage() {
 
    this.storage.get(STORAGE_KEY).then(images => {
        let arr = JSON.parse(images);
        let filtered = arr.filter(name => name != this.loadImage.name);
        this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
 
        var correctPath = this.loadImage.filePath.substr(0, this.loadImage.filePath.lastIndexOf('/') + 1);
 
        this.file.removeFile(correctPath, this.loadImage.name).then(res => {
           // this.presentToast('File removed.');
        });
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
}
