import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Editpost4Page } from './editpost4.page';

describe('Editpost4Page', () => {
  let component: Editpost4Page;
  let fixture: ComponentFixture<Editpost4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editpost4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Editpost4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
