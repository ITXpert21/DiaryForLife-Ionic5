import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Newpost7Page } from './newpost7.page';

describe('Newpost7Page', () => {
  let component: Newpost7Page;
  let fixture: ComponentFixture<Newpost7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newpost7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Newpost7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
