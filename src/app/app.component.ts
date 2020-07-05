import { Component } from '@angular/core';

import { Platform, NavController  } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router} from '@angular/router';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
const STORAGE_KEY = 'post_videos';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public storage: Storage,
    private router: Router,
    public navCtrl: NavController,
    public backgroundMode: BackgroundMode

  ) {
    this.sideMenu();
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.backgroundMode.enable();
      // this.storage.get(STORAGE_KEY).then((result) => {
      //   console.log(result);
      // });

      // this.backgroundMode.on("activate").subscribe(()=>{
      //   console.log("background11111111 activate !!!!");
      //   this.storage.get(STORAGE_KEY).then((result) => {
      //     console.log(result);
      //   });

      // });

      this.storage.get('token').then((val) => {
        
        if(val != null)
          this.navCtrl.navigateRoot('/first');
        else
          this.router.navigateByUrl('/');
      });

    });
  }
  
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "New Diary",
        url   : "/newdiary",
        icon  : "add-circle-outline",
      },
      {
        title : "All Diary",
        url   : "/alldiary",
        icon  : "newspaper-outline"
      },
      {
        title : "My Profile",
        url   : "/profile",
        icon  : "settings-outline"
      },
      {
        title : "Signout",
        url   : "/home",
        icon  : "people-outline"
      }
    ]
  }  
}
