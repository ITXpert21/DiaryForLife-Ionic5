import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Newpost10Page } from './newpost10.page';

describe('Newpost10Page', () => {
  let component: Newpost10Page;
  let fixture: ComponentFixture<Newpost10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newpost10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Newpost10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
