import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailreminderPage } from './detailreminder.page';

describe('DetailreminderPage', () => {
  let component: DetailreminderPage;
  let fixture: ComponentFixture<DetailreminderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailreminderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailreminderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
