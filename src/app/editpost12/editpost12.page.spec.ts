import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Editpost12Page } from './editpost12.page';

describe('Editpost12Page', () => {
  let component: Editpost12Page;
  let fixture: ComponentFixture<Editpost12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editpost12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Editpost12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
