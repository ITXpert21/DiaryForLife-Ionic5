import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.page.html',
  styleUrls: ['./signout.page.scss'],
})
export class SignoutPage implements OnInit {

  constructor(public storage: Storage, private router: Router,) {
    this.storage.remove('token')
    this.router.navigate(['/home'])

  }

  ngOnInit() {
  }

}
