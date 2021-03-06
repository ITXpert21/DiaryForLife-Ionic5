import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { HttpClientModule } from  '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { AuthenticationService } from  './services/authentication.service';
import { IonicStorageModule } from '@ionic/storage';

import { MediaCapture} from '@ionic-native/media-capture/ngx';
import { StreamingMedia} from '@ionic-native/streaming-media/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { VideoEditor } from '@ionic-native/video-editor/ngx';
import { LocalNotifications} from '@ionic-native/local-notifications/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule,  IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    BackgroundMode,
    Camera,
    File,
    FilePath,
    AuthenticationService,
    WebView,
     MediaCapture,
     FileChooser,
     FileTransfer,
     StreamingMedia,
     VideoEditor,
     LocalNotifications,
    // ImagePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
