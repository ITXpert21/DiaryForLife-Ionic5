import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ActionSheetController, Platform, LoadingController, ToastController } from '@ionic/angular';
import { FileTransfer, FileTransferObject , FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { File, FileEntry} from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { VideoEditor,CreateThumbnailOptions } from '@ionic-native/video-editor/ngx';
import { Storage } from '@ionic/storage';
import { Post } from  '../model/post';
import { PostService  } from '../services/post.service';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
const STORAGE_KEY = 'post_videos';
@Component({
  selector: 'app-newpost5',
  templateUrl: './newpost5.page.html',
  styleUrls: ['./newpost5.page.scss'],
})
export class Newpost5Page implements OnInit {
  categoryId : any;
  selectedVideo = false;
  uploadedVideo: string;
  post_id : any;
  loader: any;
  videoId: any;
  flag_upload = true;
  flag_play = true;

  selectDate : string = "";
  comment : string = "";


  diarydate : any;
  token : any;
  loadImage = {name: "", path: "", filePath: ""};
  showAvatar = false;
  formData : any;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public storage: Storage,
    private camera: Camera,
    public postService : PostService,
    public actionSheetCtrl: ActionSheetController,
    private transfer: FileTransfer, 
    private file: File,
    private loadingCtrl: LoadingController,
    private toastController: ToastController,
    public streamingMedia: StreamingMedia, 
    public fileChooser: FileChooser, 
    private mediaCapture: MediaCapture,
    private plt: Platform,
    private filePath: FilePath,
    private webview: WebView,
    public backgroundMode: BackgroundMode,
    public videoEditor : VideoEditor
  ) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.categoryId = this.router.getCurrentNavigation().extras.state.categoryId;
      }
    });    
    this.formData = new FormData();
  }
  async presentActionSheet() {
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Gallery',
          handler: () => {
            this.getVideo();
        }},
        {
          text: 'Use Camera',
          handler: () => {
            this.capturevideo();
        }},
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
      await actionSheet.present();
  }

  getVideo() {
    if (this.plt.is('android') /*&& sourceType === this.camera.PictureSourceType.PHOTOLIBRARY*/) {
      this.fileChooser.open()
      .then(imagePath => {
        this.filePath.resolveNativePath(imagePath)
        .then(filePath => {
          this.videoId = filePath;
          this.selectedVideo = true;
          // let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          // let currentName = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.length);
        });
  
      }).catch(e => console.log(e));
    }
  }

  capturevideo() {
    let options: CaptureVideoOptions = { limit: 1 };
    this.mediaCapture.captureVideo(options)
    .then((videodata: MediaFile[]) => {
      var i, path, len;
      for (i = 0, len = videodata.length; i < len; i += 1) {
        path = videodata[i].fullPath;
        // do something interesting with the file
      }
      this.videoId = path;
      this.flag_play = false;
      this.flag_upload = false;
      this.selectedVideo = true;
      console.log('vidoeid = ', this.videoId);

      // });
    });
  }

  updateStoredImages(post_id, name) {
    let newPostVideo = {
      post_id : post_id,
      name : name
    };
    var arr = [];
    // arr.push(newPostVideo);
    // console.log('arr======', arr);
    // this.storage.set(STORAGE_KEY, arr);

    this.storage.get(STORAGE_KEY).then((data)=>{
      console.log("data ===", data);
      if(data != null)
        arr = data;

      arr.push(newPostVideo);
      console.log('arr======', arr);
      this.storage.set(STORAGE_KEY, arr);
    });
  }  


  createFileName() {
    var d = new Date(),
        n = d.getTime(),
        newFileName = n + ".jpg";
    return newFileName;
  }

  playVideo() {
    let options: StreamingVideoOptions = {
    successCallback: () => { this.flag_upload = true; console.log('Video played'); },
    errorCallback: (e) => { console.log('Error streaming') },
    orientation: 'landscape'
    };
    this.streamingMedia.playVideo(this.videoId, options);
  }

  async selectImage() {
    const actionSheet = await this.actionSheetCtrl.create({
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

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  async makeFormDataForFeatureImage(imagePath) {
    this.file.resolveLocalFilesystemUrl(imagePath)
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
      const imgBlob = new Blob([reader.result], {
          type: file.type
      });
      this.formData.append('feature_file', imgBlob, file.name);
      this.registerNewPost();
    };
    reader.readAsArrayBuffer(file);
  }

  async registerNewPost() {
    this.formData.append('selectDate', this.selectDate);
    this.formData.append('comment', this.comment);

    this.formData.append('token', this.token);
    this.formData.append('categoryId', this.categoryId);

    const loading = await this.loadingCtrl.create({
        message: 'Saving your post...',
    });
    await loading.present();

    this.postService.createPost5(this.formData).subscribe((result) => {
      this.post_id = result.post_id;

      if(this.videoId == undefined){
        loading.dismiss();
        this.presentToast('Posted successfully.');
        this.router.navigate(['/post']);
      }else
      {
        this.updateStoredImages(result.post_id, this.videoId);
        loading.dismiss();
        let navigationExtras: NavigationExtras = {
          state: {
            categoryId: this.categoryId
          }
        };    
        this.router.navigate(['/post'], navigationExtras);      
      }
  
    },error => {  
      loading.dismiss();
      this.presentToast(error.error.errormsg);

    });         

  }
  async submit(){
    // if(this.post_name == undefined){
    //   this.presentToast('Please enter post title.');
    //   return;
    // }
    // if(this.post_content == undefined){
    //   this.presentToast('Please enter post content.');
    //   return;
    // }

    await this.storage.get('token').then((data)=>{
      this.token = data;
    });

    if(this.loadImage.filePath != '')
      await this.makeFormDataForFeatureImage(this.loadImage.filePath);
    else
      this.registerNewPost();  
  }   
  goBack(){
    this.router.navigate(['/post'])
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
