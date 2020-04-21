import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditpostPage } from './editpost.page';

describe('EditpostPage', () => {
  let component: EditpostPage;
  let fixture: ComponentFixture<EditpostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
