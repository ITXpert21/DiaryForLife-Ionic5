import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignoutPage } from './signout.page';

describe('SignoutPage', () => {
  let component: SignoutPage;
  let fixture: ComponentFixture<SignoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
