import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Editpost3Page } from './editpost3.page';

describe('Editpost3Page', () => {
  let component: Editpost3Page;
  let fixture: ComponentFixture<Editpost3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editpost3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Editpost3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
