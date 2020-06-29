import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Newpost12Page } from './newpost12.page';

describe('Newpost12Page', () => {
  let component: Newpost12Page;
  let fixture: ComponentFixture<Newpost12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newpost12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Newpost12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
