import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditreminderPage } from './editreminder.page';

describe('EditreminderPage', () => {
  let component: EditreminderPage;
  let fixture: ComponentFixture<EditreminderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditreminderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditreminderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
