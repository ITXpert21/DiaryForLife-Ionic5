import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Editpost11Page } from './editpost11.page';

describe('Editpost10Page', () => {
  let component: Editpost11Page;
  let fixture: ComponentFixture<Editpost11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editpost11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Editpost11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
