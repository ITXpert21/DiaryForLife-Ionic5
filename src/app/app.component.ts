import { Component } from '@angular/core';

import { Platform, NavController  } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router} from '@angular/router';

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
    public navCtrl: NavController

  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
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
