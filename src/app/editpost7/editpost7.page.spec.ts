import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Editpost7Page } from './editpost7.page';

describe('Editpost7Page', () => {
  let component: Editpost7Page;
  let fixture: ComponentFixture<Editpost7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editpost7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Editpost7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
