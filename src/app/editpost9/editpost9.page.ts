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
  selector: 'app-editpost9',
  templateUrl: './editpost9.page.html',
  styleUrls: ['./editpost9.page.scss'],
})
export class Editpost9Page implements OnInit {
  categoryId : any;
  categoryName : any;
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

  selectDate : string = "";
  vaccination : string = "";
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
    public videoEditor : VideoEditor
  ) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.postInfo = this.router.getCurrentNavigation().extras.state.post;
        this.categoryId = this.router.getCurrentNavigation().extras.state.categoryId;
        this.categoryName = this.router.getCurrentNavigation().extras.state.categoryName;

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
    }
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
    });
    await loading.present();

    this.postService.getPostById(postData).subscribe((result) => {
      loading.dismiss();
      this.selectDate = result.vaccination_selectDate;
      this.vaccination = result.vaccination;
      this.comment = result.vaccination_comment;
    
        if( result.post_picture.indexOf('noimage.jpg') >= 0)
          this.loadImage.path = '';
        else
          this.loadImage.path = result.post_picture;
        if(this.loadImage.path == '')
          this.showAvatar = false;
        else
          this.showAvatar = true;  
          
          this.storage.get(STORAGE_KEY).then((result) => {

            for(let i=0; i<result.length; i++){
              if(result[i].post_id == this.postInfo.ID){
                this.videoId = result[i].name;
                break;
              }
            }
            console.log("loaded video ===", this.videoId);
            if(this.videoId == '')
              this.selectedVideo = false;
            else  
              this.selectedVideo = true;            
          });

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

  updateStoredVideo(post_id, name) {

      var arr = [];
      this.storage.get(STORAGE_KEY).then((data)=>{
      if(data != null)
        arr = data;

      for(var i=0; i<arr.length; i++){
        if(arr[i].post_id == post_id )
          arr[i].name = name;
      }  
      this.storage.set(STORAGE_KEY, arr);
    });
  }  
  async registerNewPost() {
    this.formData.append('selectDate', this.selectDate);
    this.formData.append('vaccination', this.vaccination);

    this.formData.append('comment', this.comment);

    this.formData.append('token', this.token);
    this.formData.append('postId', this.postInfo.ID);

    const loading = await this.loadingCtrl.create({
        message: 'Saving your post...',
    });
    await loading.present();

    this.postService.updatePost9(this.formData).subscribe((result) => {
      if(this.videoId == undefined){
        loading.dismiss();
        this.presentToast('Posted successfully.');
        this.router.navigate(['/post']);
      }else{
        this.updateStoredVideo(this.postInfo.ID, this.videoId);
        loading.dismiss();
        let navigationExtras: NavigationExtras = {
          state: {
            categoryId: this.categoryId,
            categoryName: this.categoryName
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
    await this.storage.get('token').then((data)=>{
      this.token = data;
    });

    if(this.isSelectedPictureFromDevice)
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
