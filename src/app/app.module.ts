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
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule,  IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    File,
    FilePath,
    AuthenticationService,
    WebView,
    // ImagePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
