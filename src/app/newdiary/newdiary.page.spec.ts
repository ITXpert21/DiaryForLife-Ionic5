import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewdiaryPage } from './newdiary.page';

describe('NewdiaryPage', () => {
  let component: NewdiaryPage;
  let fixture: ComponentFixture<NewdiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdiaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewdiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
