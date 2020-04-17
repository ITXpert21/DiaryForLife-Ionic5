import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocalNotifications, ELocalNotificationTriggerUnit} from '@ionic-native/local-notifications/ngx'
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
    private localNotifications: LocalNotifications
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.localNotifications.schedule([{
      //   id: 1,
      //   trigger: {in : 20, unit : ELocalNotificationTriggerUnit.SECOND},
      //   text: 'Multi 1111111111'
      // },
      // {
      //   id: 2,
      //   trigger: {in : 40, unit : ELocalNotificationTriggerUnit.SECOND},
      //   title: 'Local ILocalNotification Example',
      //   text: 'Multi 222222222222222'

      // }]);
      //Fri Apr 17 2020 04:01:39 GMT+0800
      var today = new Date(); 
      //console.log("today", today);
      var newYear = new Date("Fri Apr 17 2020 04:01:39 GMT+0800"); 
      console.log('getTriggerMinutes', this.getTriggerMinutes(today, newYear));
    });
  }
  
  getTriggerMinutes(currentDate, reminderDate){
    var dif = (reminderDate - currentDate); 
    var dif = Math.round((dif/1000)/60); 
    return dif;
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
