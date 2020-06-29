import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Editpost9Page } from './editpost9.page';

describe('Editpost9Page', () => {
  let component: Editpost9Page;
  let fixture: ComponentFixture<Editpost9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editpost9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Editpost9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
