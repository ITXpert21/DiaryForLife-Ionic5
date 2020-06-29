import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Newpost8Page } from './newpost8.page';

describe('Newpost8Page', () => {
  let component: Newpost8Page;
  let fixture: ComponentFixture<Newpost8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newpost8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Newpost8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
