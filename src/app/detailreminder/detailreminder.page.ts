import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-detailreminder',
  templateUrl: './detailreminder.page.html',
  styleUrls: ['./detailreminder.page.scss'],
})
export class DetailreminderPage implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router

  ) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/reminder'])
  }
}
