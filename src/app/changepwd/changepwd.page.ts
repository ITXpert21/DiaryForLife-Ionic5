import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.page.html',
  styleUrls: ['./changepwd.page.scss'],
})
export class ChangepwdPage implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router

  ) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/profile'])
  }
}
