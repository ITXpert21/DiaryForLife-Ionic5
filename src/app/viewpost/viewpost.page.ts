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
const STORAGE_KEY = 'post_videos';
@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.page.html',
  styleUrls: ['./viewpost.page.scss'],
})
export class ViewpostPage implements OnInit {
  categoryId : any;
  selectedVideo = false;
  isSelectedVideoFromDevice = false;
  isSelectedPictureFromDevice = false;

  uploadedVideo: string;
  postInfo : any;
  loader: any;
  videoId: any;
  flag_upload = true;
  flag_play = true;
  postlist : any[];

  post_content : string;
  post_medical : string;
  post_age : string;
  post_treatment : string;
  post_selectDate : string; 
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
    public videoEditor : VideoEditor
  ) { }

  ngOnInit() {
    console.log("11111111111");
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.postInfo = this.router.getCurrentNavigation().extras.state.post;
        this.getPostById();        
      }
    });    
    this.formData = new FormData();
  }

  async getPostById(){

    await this.storage.get('token').then((data)=>{
      this.token = data;
    });  
    let postData = {
      token : this.token,
      postId : this.postInfo.ID
    };
    console.log("postData", postData);
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
    });
    await loading.present();

    this.postService.getPostById(postData).subscribe((result) => {
      loading.dismiss();
      // this.postlist = result.services;
      this.post_medical = result.post_medical;
      this.post_content = result.post_content;
      this.post_age = result.post_age;
      this.post_treatment = result.post_treatment;
      this.post_selectDate = result.post_selectDate
      
        if( result.post_picture.indexOf('noimage.jpg') >= 0)
          this.loadImage.path = '';
        else
          this.loadImage.path = result.post_picture;

        console.log("loadImage", this.loadImage.path);
        if(this.loadImage.path == '')
          this.showAvatar = false;
        else
          this.showAvatar = true;  
          
          this.storage.get(STORAGE_KEY).then((result) => {
            
            console.log("result ===", result);

            for(let i=0; i<result.length; i++){
              console.log("storage result ===", result[i].post_id);
              console.log("this.postInfo.ID ===", this.postInfo.ID);
              if(result[i].post_id == this.postInfo.ID){
                console.log("12345678");
                this.videoId = result[i].name;
                break;
              }
            }
            console.log("this.videoId ==", this.videoId);

            if(this.videoId == '')
              this.selectedVideo = false;
            else  
              this.selectedVideo = true;            
          });
        // this.videoId = result.post_video;
        // if(this.videoId == '')
        //   this.selectedVideo = false;
        // else  
        //   this.selectedVideo = true;

    },error => {  

    });  
  }  
  async presentActionSheet() {
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Gallery',
          handler: () => {
            this.isSelectedVideoFromDevice = true;
            this.getVideo();
        }},
        {
          text: 'Use Camera',
          handler: () => {
            this.isSelectedVideoFromDevice = true;
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
      
    });
  }

  uploadVideo(post_id) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options1: FileUploadOptions = {
      fileKey: 'video_upload_file',
      fileName: this.videoId,
      headers: {},
      mimeType: "multipart/form-data",
      params: { post_id : post_id },
      chunkedMode: false
    }

    fileTransfer.upload(this.videoId, 'http://mydiaryforlife.betaplanets.com/wp-json/mobileapi/v1/uploadVideo', options1)
    .then((data) => {
      this.flag_upload = true;
      
    }, (err) => {
    
    });
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
          this.isSelectedPictureFromDevice = true;
          this.loadImage = { name: currentName, path: resPath, filePath: native_filePath };

        });
      } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          let native_filePath = correctPath + currentName;
          let resPath = this.pathForImage(native_filePath);
          this.showAvatar = true;
          this.isSelectedPictureFromDevice = true;
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
