import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionSheetController, IonInput, Platform } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File, FileEntry } from "@ionic-native/file/ngx";
import { AuthenticationService  } from '../services/authentication.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  @ViewChild('inputId', {  static: false })  inputElement: IonInput;

  selectedPane: string = '';
  shouldShow = true;
  toggle() { this.shouldShow = !this.shouldShow; }  
  profileData : any;
  email : string;
  birthday : any;
  gender : string;
  first_name : string;
  last_name : string;
  address : any;
  phonenumber : any;

  password : string;
  userImage : string;
  croppedImagepath = "";
  showContent : any;
  profileAction : any;
  profileReadonly : any;
  profileInfo : any;
  loadImage = {name: "", path: "", filePath: ""};
  images = [];
  selectedAvatarFromDevice : any;
  token : any;
  profileForm: FormGroup;
  isSubmitted = false;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private camera: Camera,
    private file: File,
    private actionSheetController: ActionSheetController,
    public authenticationService : AuthenticationService,
    public storage: Storage,
    private ref: ChangeDetectorRef,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private filePath: FilePath,
    private plt: Platform,
    private webview: WebView,
    public formBuilder: FormBuilder
  )
 { }

  ngOnInit() {
    this.getProfile();
    this.profileAction = false;
    this.profileReadonly = true;
    this.selectedAvatarFromDevice = false;

    this.profileForm = this.formBuilder.group({
      firstname_form: ['', [Validators.required, Validators.minLength(2)]],
      lastname_form: ['', [Validators.required, Validators.minLength(2)]],
      // password_form: ['', [Validators.required, Validators.minLength(6)]],
      email_form: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$')]],
      address_form: ['', [Validators.required, Validators.minLength(2)]],
      birthday_form: ['', [Validators.required, Validators.minLength(6)]],
      phonenumber_form: ['', [Validators.required]],

    })    
  }
  async getProfile(){
    
    const loading = await this.loadingController.create({
      message: 'Loading profile info...',
    });
    await loading.present();

    await this.storage.get('token').then((data)=>{
      this.token = data;
    });
    
    this.authenticationService.getProfile(this.token).subscribe((profileinfo) => {
      loading.dismiss();
      this.showContent = true;
       this.profileInfo = profileinfo;
       console.log(profileinfo)
       this.first_name = this.profileInfo.first_name;
       this.last_name = this.profileInfo.last_name;
       this.email = this.profileInfo.email;
       this.birthday = this.profileInfo.birthday;
       this.address = this.profileInfo.address;
       this.phonenumber = this.profileInfo.phonenumber;
       this.userImage = this.profileInfo.userImage;

      this.profileForm.get('firstname_form').setValue(this.first_name, {
        onlyself: true
      });
      this.profileForm.get('lastname_form').setValue(this.last_name, {
        onlyself: true
      });      
      this.profileForm.get('email_form').setValue(this.email, {
        onlyself: true
      });  
      this.profileForm.get('birthday_form').setValue(this.birthday, {
        onlyself: true
      });  
      this.profileForm.get('address_form').setValue(this.address, {
        onlyself: true
      });
      this.profileForm.get('phonenumber_form').setValue(this.phonenumber, {
        onlyself: true
      });      
    },error => {  
      loading.dismiss();

    });  
  }
  goBack(){
    this.router.navigate(['/myprofile']);
  }
  gotoHome(){
    this.storage.remove('token')
    this.router.navigate(['/home'])
  }
  get errorControl() {
    return this.profileForm.controls;
  }
  submit(){
    this.isSubmitted = true;
    if (!this.profileForm.valid) {
      console.log('Please provide all the required values!')
      return;
    } else {
      console.log(this.profileForm.value);
      let formvalue = this.profileForm.value;

      this.first_name = formvalue.firstname_form;
      this.last_name = formvalue.lastname_form;
      this.email = formvalue.email_form;
      this.birthday = formvalue.birthday_form; 
      this.address = formvalue.address_form; 
      this.phonenumber = formvalue.phonenumber_form; 

    }     
    this.startUpload();
  } 
  
  async updateProfile(formData: FormData) {
    const loading = await this.loadingController.create({
        message: 'Updating user profile...',
    });
    await loading.present();

    this.authenticationService.updateProfile(formData).subscribe((newUser) => {
      loading.dismiss();
      //this.presentToast('Profile updated successfully.');
      //this.deleteImage();
      this.router.navigate(['/myprofile']);
    },error => {  
      loading.dismiss();
      this.presentToast("Update profile failed.");

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
        formData.append('token', this.token);
        formData.append('first_name', this.first_name);
        formData.append('last_name', this.last_name);
        formData.append('email', this.email);
        formData.append('birthday', this.birthday);
        formData.append('address', this.address);
        formData.append('phonenumber', this.phonenumber);


        this.updateProfile(formData);
    };
    reader.readAsArrayBuffer(file);
  }

  startUpload() {
    if(this.loadImage.filePath == ""){
      const formData = new FormData();
      formData.append('first_name', this.first_name);
      formData.append('token', this.token);
      formData.append('last_name', this.last_name);
      formData.append('email', this.email);
      formData.append('birthday', this.birthday);
      formData.append('address', this.address);
      formData.append('phonenumber', this.phonenumber);
      formData.append('role', 'player');
      this.updateProfile(formData);
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
  clickEdit(){
    this.profileReadonly = false;
    this.profileAction = true;
    this.inputElement.setFocus();

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
              let native_filePath = correctPath + currentName;
              let resPath = this.pathForImage(native_filePath);
              this.selectedAvatarFromDevice = true;
              this.loadImage = { name: currentName, path: resPath, filePath: native_filePath };
                });
    } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        let native_filePath = correctPath + currentName;
        let resPath = this.pathForImage(native_filePath);
        this.selectedAvatarFromDevice = true;
        this.loadImage = { name: currentName, path: resPath, filePath: native_filePath };
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
          this.selectedAvatarFromDevice = true;
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
