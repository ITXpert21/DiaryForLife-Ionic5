import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForgotpwdPage } from './forgotpwd.page';

describe('ForgotpwdPage', () => {
  let component: ForgotpwdPage;
  let fixture: ComponentFixture<ForgotpwdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpwdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotpwdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
