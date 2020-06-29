import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewpostPage } from './viewpost.page';

describe('ViewpostPage', () => {
  let component: ViewpostPage;
  let fixture: ComponentFixture<ViewpostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
