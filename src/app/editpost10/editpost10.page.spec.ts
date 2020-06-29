import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Editpost10Page } from './editpost10.page';

describe('Editpost10Page', () => {
  let component: Editpost10Page;
  let fixture: ComponentFixture<Editpost10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editpost10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Editpost10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
