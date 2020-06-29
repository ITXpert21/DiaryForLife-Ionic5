import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Editpost5Page } from './editpost5.page';

describe('Editpost5Page', () => {
  let component: Editpost5Page;
  let fixture: ComponentFixture<Editpost5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editpost5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Editpost5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
