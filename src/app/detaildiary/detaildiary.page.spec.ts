import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetaildiaryPage } from './detaildiary.page';

describe('DetaildiaryPage', () => {
  let component: DetaildiaryPage;
  let fixture: ComponentFixture<DetaildiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaildiaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetaildiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
