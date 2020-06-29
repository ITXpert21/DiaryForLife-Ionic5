import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Newpost13Page } from './newpost13.page';

describe('Newpost13Page', () => {
  let component: Newpost13Page;
  let fixture: ComponentFixture<Newpost13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newpost13Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Newpost13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
