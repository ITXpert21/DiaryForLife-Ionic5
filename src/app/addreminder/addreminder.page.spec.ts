import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddreminderPage } from './addreminder.page';

describe('AddreminderPage', () => {
  let component: AddreminderPage;
  let fixture: ComponentFixture<AddreminderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreminderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddreminderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
