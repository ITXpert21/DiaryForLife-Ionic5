import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlldiaryPage } from './alldiary.page';

describe('AlldiaryPage', () => {
  let component: AlldiaryPage;
  let fixture: ComponentFixture<AlldiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldiaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlldiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
