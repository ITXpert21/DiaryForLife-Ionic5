import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyprofilePage } from './myprofile.page';

describe('MyprofilePage', () => {
  let component: MyprofilePage;
  let fixture: ComponentFixture<MyprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
